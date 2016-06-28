/**
 * Access github api
 * @function githubAPI
 * @returns {Promise}
 */
'use strict'

const https = require('https')
const pkg = require('../../package.json')

/** @lends githubAPI */
function githubAPI (pathname) {
  return new Promise((resolve, reject) => {
    https.get({
      host: 'api.github.com',
      path: pathname,
      method: 'GET',
      headers: {
        'User-Agent': pkg.name
      }
    }, (res) => {
      // Continuously update stream with data
      let body = ''
      res.on('data', (d) => {
        body += d
      })
      res.on('end', () => resolve(
        Object.assign(res, { body })
      ))
      res.on('error', (err) => reject(err))
    })
  })
}

module.exports = githubAPI