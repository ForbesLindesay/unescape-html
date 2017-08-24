'use strict'

/**
 * un-escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */

module.exports = function (html) {
  return String(html)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&#x3A;/g, ':')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}
