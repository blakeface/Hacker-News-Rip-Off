import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';

import NewsHeader from './components/newsHeader';
import NewsList from './components/newsList';

class App extends Component {

  render() {
    return (
      <div>
        <NewsHeader />
        <NewsList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#content'));
