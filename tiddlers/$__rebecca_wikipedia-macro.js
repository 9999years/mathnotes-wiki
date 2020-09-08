/*\
title: $:/rebecca/wikipedia-macro.js
type: application/javascript
module-type: macro

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.name = "wikipedia";

exports.params = [
  // page title
  { name: "title" },
  // title to display
  { name: "display" },
];

exports.run = function(title, display) {
  display = display || title;
  display = display.replaceAll("#", " › ");
  title = encodeURIComponent(title.replaceAll(" ", "_"));
  return `<a href="https://en.wikipedia.org/wiki/${title}" class="wikipedia-link">${display}</a>`;
};

})();
