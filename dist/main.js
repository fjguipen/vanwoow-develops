"use strict";

var state = {
  current: posts.length - 1
};

window.onload = function () {
  createContent();
  createMoreTrigger();
};

var createContent = function createContent() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state.current;
  var postData = posts[index];
  var root = document.getElementById('content');
  return root.innerHTML = Post(postData);
};

var createNavigationContent = function createNavigationContent() {
  var hook = document.getElementById('more');
  var filteredPosts = posts.filter(function (post) {
    return post.id != state.current;
  });
  setTimeout(function () {
    document.getElementById('navigation').classList.add('fading');
  }, 100);
  return hook.insertAdjacentHTML('beforeend', Navigation(filteredPosts.reverse()));
};

var createMoreTrigger = function createMoreTrigger() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!target) {
    target = document.getElementById('more');
  }

  setTimeout(function () {
    target.classList.add('visible');
  }, 1000);
};

var showMore = function showMore(target) {
  if (target.classList.contains('opened')) return;
  target.classList.add('opened');
  document.querySelector('body').classList.add('no-scroll');
  target.querySelector('#label').classList.add('closed');
  createNavigationContent();
};

var handleChildClick = function handleChildClick(e, action) {
  e.stopPropagation();

  if (action === 'open') {
    showMore(e.target.parentNode);
  } else if (action === 'close') {
    close(e.target.parentNode);
  }
};

var close = function close(target) {
  target.classList.add('none');
  target.classList.remove('opened');
  document.querySelector('body').classList.remove('no-scroll');
  setTimeout(function () {
    target.classList.remove('none', 'visible');
    target.querySelector('#label').classList.remove('closed');
    target.removeChild(target.querySelector('#navigation'));
    createMoreTrigger(target);
  }, 300);
};

var handleClickChangePost = function handleClickChangePost(index) {
  close(document.getElementById('more'));
  state.current = index;
  return createContent(index);
};