import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import NewsItem from './newsItem';

const url = 'https://hacker-news.firebaseio.com/v0';

class NewsList extends Component {


  getMore () {
    return (
      <div className='news-list-more'>
        <a className='news-list-more-link' href='https://news.ycombinator.com/news?p=2'>More</a>
      </div>
    );
  }

  render () {
    $.ajax({
      url: `${url}/newstories.json`,
      dataType: 'json',
    }).then( (stories) => {
      const deferred = _(stories.slice(0, 30)).map( (id) => {
        return $.ajax({
          url: `${url}/item/${id}.json`,
          dataType: 'json',
        })
      }).value();
      return $.when.apply($, deferred);
    }).done( (...args) => {
      const items = _(args).map(function (arg) {
        return arg[0];
      }).value();

      return (
        <div className='news-list'>
        <h3>news list!!! render test</h3>
          <div className='news-list-items'>
            {_(items).map( (item, i) => {
              console.log(item);
              return <NewsItem key={item.id}
                item={item}
                rank={i + 1} />;
            })}
          </div>
        </div>
      );
    })
  }
}

export default NewsList;
