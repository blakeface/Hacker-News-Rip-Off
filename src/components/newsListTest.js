const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const NewsList = require('./newsList')

$.ajax({
  url: '/json/data.json',
}).then(function (items) {
  ReactDOM.render(<NewsList items={items} />, $('#content')[0]);
});
