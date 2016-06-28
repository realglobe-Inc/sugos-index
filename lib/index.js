/**
 * Index for sugos projects
 * @module sugos-index
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get Core () { return d(require('./core')) },
  get Demo () { return d(require('./demo')) },
  get Endpoint () { return d(require('./endpoint')) },
  get Example () { return d(require('./example')) },
  get Helper () { return d(require('./helper')) },
  get Interface () { return d(require('./interface')) },
  get Middleware () { return d(require('./middleware')) }
}
