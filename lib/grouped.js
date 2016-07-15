/**
 * Grouped packages
 * @namespace Grouped
 */
'use strict'

module.exports = [
  {
    group: 'Core',
    desc: 'Core of SUGOS',
    modules: require('./core')
  },
  {
    group: 'Demo',
    desc: 'Demo for SUGOS scaffolding',
    modules: require('./demo')
  },
  {
    group: 'Example',
    desc: 'Example project using SUGOS framework',
    modules: require('./example')
  },
  {
    group: 'Module',
    desc: 'Module plugins for SUGOS-Actor',
    modules: require('./module')
  },
  {
    group: 'Middleware',
    desc: 'Middleware plugins for SUGO-Cloud',
    modules: require('./middleware')
  },
  {
    group: 'Endpoint',
    desc: 'Endpoint plugins for SUGO-Cloud',
    modules: require('./endpoint')
  },
  {
    group: 'Agent',
    desc: 'Agent of endpoints',
    modules: require('./agent')
  },
  {
    group: 'Helper',
    desc: 'Helper packages.',
    modules: require('./helper')
  }
]
