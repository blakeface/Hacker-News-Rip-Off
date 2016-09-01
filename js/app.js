const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('lodash');
const $ = require('jquery');

const NewsList = require('./newsList');
const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

$.ajax({
  url: url,
  dataType: 'json',
}).then(function (stories) {
  const deferred = _(stories.slice(0, 30)).map(function (id) {
    return $.ajax({
      url: 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json',
      dataType: 'json',
    })
  }).value();

  return $.when.apply($, deferred);
}).then(function () {
  const items = _(arguments).map(function (argument) {
    return arguments[0];
  }).value();
  ReactDOM.render(<NewsList items={items}/>, $('#content')[0]);
});
