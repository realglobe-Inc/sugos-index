#!/usr/bin/env node

/**
 * Set git and github config.
 */

process.chdir(`${__dirname}/../..`)

const { setGitConfig, setGithubConfig } = require('sg-travis/lib/util')

setGitConfig()
setGithubConfig()
