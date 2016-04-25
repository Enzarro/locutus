// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {} // eslint-disable-line no-native-reassign
window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var log1p = require('/Users/kvz/code/phpjs/src/php/math/log1p.js')

describe('php.math.log1p.js', function () {
  it('should pass example 1', function (done) {
    log1p(1e-15)
    var expected = 9.999999999999995e-16
    var result = log1p(1e-15)
    expect(result).to.deep.equal(expected)
    done()
  })
})