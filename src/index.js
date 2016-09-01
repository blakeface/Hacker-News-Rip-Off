import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';

import NewsList from './components/newsList';

const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

class App extends Component {
  render() {
    return (
      <div>
      <NewsList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#content'));

// $.ajax({
//   url: url,
//   dataType: 'json',
// }).then(function (stories) {
//   const deferred = _(stories.slice(0, 30)).map(function (id) {
//     return $.ajax({
//       url: 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json',
//       dataType: 'json',
//     })
//   }).value();
//
//   return $.when.apply($, deferred);
// }).then(function () {
//   const items = _(arguments).map(function (argument) {
//     return arguments[0];
//   }).value();
//   ReactDOM.render(<NewsList items={items}/>, document.querySelector('#content'));
// });
