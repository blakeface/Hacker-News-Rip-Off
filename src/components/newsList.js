import React, { Component } from 'react';
import _ from 'lodash';
import NewsHeader from './newsHeader';
import NewsItem from './newsItem';

class NewsList extends Component {
  getMore () {
    return (
      <div className='news-list-more'>
        <a className='news-list-more-link' href='https://news.ycombinator.com/news?p=2'>More</a>
      </div>
    );
  }
  render () {
    return (
      <div className='news-list'>
        <NewsHeader />
        <div className='news-list-items'>
          {_(this.props.items).map(function (item, i) {
            return <NewsItem key={item.id}
              item={item}
              rank={i + 1} />;
          }.bind(this)).value()}
        </div>
        {this.getMore()}
      </div>
    );
  }
}

export default NewsList;
