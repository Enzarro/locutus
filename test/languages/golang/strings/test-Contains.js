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
var Contains = require('/Users/kvz/code/phpjs/src/golang/strings/Contains.js')

describe('golang.strings.Contains.js', function () {
  it('should pass example 1', function (done) {
    Contains('Kevin', 'K')
    var expected = true
    var result = Contains('Kevin', 'K')
    expect(result).to.deep.equal(expected)
    done()
  })
})