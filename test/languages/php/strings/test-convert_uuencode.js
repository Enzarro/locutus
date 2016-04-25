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
var convert_uuencode = require('/Users/kvz/code/phpjs/src/php/strings/convert_uuencode.js')

describe('php.strings.convert_uuencode.js', function () {
  it.skip('should pass example 1', function (done) {
    convert_uuencode("test\ntext text\r\n")
    var expected = "0=&5S=`IT97AT('1E>'0-\"@``"
    var result = convert_uuencode("test\ntext text\r\n")
    expect(result).to.deep.equal(expected)
    done()
  })
})