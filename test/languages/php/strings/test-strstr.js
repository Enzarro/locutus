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
var strstr = require('/Users/kvz/code/phpjs/src/php/strings/strstr.js')

describe('php.strings.strstr.js', function () {
  it('should pass example 1', function (done) {
    strstr('Kevin van Zonneveld', 'van')
    var expected = 'van Zonneveld'
    var result = strstr('Kevin van Zonneveld', 'van')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    strstr('Kevin van Zonneveld', 'van', true)
    var expected = 'Kevin '
    var result = strstr('Kevin van Zonneveld', 'van', true)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    strstr('name@example.com', '@')
    var expected = '@example.com'
    var result = strstr('name@example.com', '@')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    strstr('name@example.com', '@', true)
    var expected = 'name'
    var result = strstr('name@example.com', '@', true)
    expect(result).to.deep.equal(expected)
    done()
  })
})