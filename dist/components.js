"use strict";

/**
 *  POST COMPONENT
 */
var Post = function Post(post) {
  return "\n        <article>\n            ".concat(Title(post.title), "\n            ").concat(DateC(post.date, post.by), "\n            ").concat(Body(post.body, post.url), "\n        </article>\n        ");
};

var Title = function Title(title) {
  return "<h1 class=\"post-title regular\">".concat(title, "</h1>");
};

var DateC = function DateC(date, by) {
  return "<span class=\"date\">".concat(date, "  \xB7  ").concat(by, "</span>");
};

var Body = function Body(text, url) {
  return "\n        <div class=\"post-content\">".concat(text, "</div>\n        <div class=\"footer\">\n            <a href=\"").concat(url.twitter, "\">\n                <img src=\"https://vanwoow.es/wp-content/themes/vanwoow/img/logos/redes/twi-g.png\">\n            </a>\n            <a href=\"").concat(url.instagram, "\">\n                <img src=\"https://vanwoow.es/wp-content/themes/vanwoow/img/logos/redes/insta-g.png\">\n            </a>\n        </div>\n        ");
};
/**
 * 
 * NAVIGATION COMPONENT
 */


var Navigation = function Navigation(posts) {
  return "\n        <div id=\"navigation\" class=\"fade-in\" onclick=\"handleChildClick(event, 'null')\">\n            <div id=\"nav-title\">\n                <h2>Vanwoow: C\xF3mo se hizo, c\xF3mo se hace y c\xF3mo se har\xE1.</h2>\n                <p>Te contamos todo todito sobre el desarrollo de la plataforma de vanwoow. Sus avances, las decisiones que se toman, los problemas con los que nos encontramos y como los resolvemos. <strong>\xA1Vamos.. participa!</strong></p>\n            </div>\n            <div id=\"post-selector\">\n                <h3>Otras publicaciones</h3>\n                ".concat(PostSelector(posts), "\n            </div>\n        </div>\n        ");
};
/**
 *  POSTSELECTOR COMPONENT
 */


var PostSelector = function PostSelector(posts) {
  if (posts.length < 1) return "<span class=\"nomorePost\">A\xFAn no hay m\xE1s publicaciones</span>";
  var salida = '<ul>';
  posts.forEach(function (post) {
    salida += "\n            <li  key=\"".concat(post.id, "\" class=\"post\" onclick=\"handleClickChangePost(").concat(post.id, ")\">\n                <span class=\"name\">").concat(post.title, "</span>\n                <span class=\"date\" >").concat(post.date, "</span>\n            </li>\n        ");
  });
  salida += '</ul>';
  return salida;
};