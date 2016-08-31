const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

const NewsItem = require('./newsItem');

$.ajax({
  url: '/json/data.json'
}).then(function (items) {
  console.log('items: ', items);
  ReactDOM.render(<NewsItem item={items[0]} rank={1} />, $('#content')[0]);
});
