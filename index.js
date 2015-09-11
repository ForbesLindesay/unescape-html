'use strict';

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(root);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['unescape-html'], function () {
            return factory(root);
        });
    } else {
        // Global Variables
        root.unescapeHtml = factory(root);
    }
}(this, function () {
    /**
     * un-escape special characters in the given string of html.
     *
     * @param  {String} html
     * @return {String}
     */
    return function unescapeHtml(html) {
        return String(html)
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, '\'')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    }
}));