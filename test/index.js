'use strict'

var assert = require('assert')
var test = require('testit')
var escape = require('escape-html')
var unescape = require('../')

test('converts &amp; into &', function () {
  assert(unescape('&amp;') === '&')
})
test('converts &lt; into <', function () {
  assert(unescape('&lt;') === '<')
})
test('converts &gt; into >', function () {
  assert(unescape('&gt;') === '>')
})
test('converts &#39; into \'', function () {
  assert(unescape('&#39;') === '\'')
})
test('converts &quot; into "', function () {
  assert(unescape('&quot;') === '"')
})
test('it is the reverse of escape-html', function () {
  var str1 = '<strong> & <a> are examples of "HTML Tags"'
  var str2 = '&amp; & &gt; are examples of \'HTML entities\''
  assert(unescape(escape(str1)) === str1)
  assert(unescape(escape(str2)) === str2)
})
