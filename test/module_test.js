/**
 * Test case for module.
 * Runs with mocha.
 */
'use strict'

const module_ = require('../lib/module.js')
const assert = require('assert')
const co = require('co')

describe('module', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Module', () => co(function * () {
    assert.ok(module_)
  }))
})

/* global describe, before, after, it */
