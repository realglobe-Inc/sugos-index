#!/usr/bin/env node

/**
 * Search projects
 */

'use strict'

process.chdir(`${__dirname}/..`)

try {
  Object.assign(process.env, require('../secrets.json'))
} catch (e) {
  // DO nothing
}
const { GITHUB_ACCESS_TOKEN } = process.env

const apeTasking = require('ape-tasking')
const co = require('co')
const writeout = require('writeout')
const { sleep } = require('apemansleep')

if (!GITHUB_ACCESS_TOKEN) {
  throw new Error('GITHUB_ACCESS_TOKEN is required')
}

const GithubAPI = require('./workers/github_api')
const REPO_NAME = 'realglobe-Inc'
const MAX_COUNT = 100
const RESULT_FILE = `${__dirname}/../lib/meta/found.json`
const QUERY = 'sugo-'

const BLACK_LIST = require('../lib/meta/discarded.json')

apeTasking.runTasks('search', [
  () => co(function * () {
    let searched = []
    for (let page of [ 1, 2, 3 ]) {
      let pathname = `/search/repositories?q=user:${REPO_NAME}+${QUERY}&page=${page}&per_page=${MAX_COUNT}&access_token=${GITHUB_ACCESS_TOKEN}`

      let { statusCode, body } = yield GithubAPI(pathname)
      if (statusCode !== 200) {
        throw new Error(`Failed to search with status: ${statusCode}`)
      }
      let data = JSON.parse(body).items.map((data) => ({
        name: data.name,
        full_name: data.full_name,
        private: data.private,
        description: data.description,
        url: data.url,
        fork: data.fork
      }))
      console.log(`${data.length} repos fetched on page ${page}`)
      searched = searched.concat(data)
      yield sleep(300)
      if (searched.length < page * MAX_COUNT) {
        break
      }
    }

    searched = searched.filter((searched) => !~BLACK_LIST.indexOf(searched.name))

    yield writeout(RESULT_FILE, JSON.stringify(searched, null, 2), {
      mkdirp: true
    })
  })
], true)
