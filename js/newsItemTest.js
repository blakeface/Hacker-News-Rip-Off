const $ = require('jquery');
const React = require('react');
const NewsItem = require('./newsItem');

$.ajax({
  url: '/json/data.json'
}).then(function (items) {
  console.log('items: ', items);
  React.render(<NewsItem item={items[0]} rank={1} />, $('#content')[0]);
});
