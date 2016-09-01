const React = require('react');
const _ = require('lodash');

const NewsHeader = require('./newsHeader');
const NewsItem = require('./newsItem');

const NewsList = React.createClass({
  getMore: function () {
    return (
      <div className='news-list-more'>
        <a className='news-list-more-link' href='https://news.ycombinator.com/news?p=2'>More</a>
      </div>
    );
  },
  render: function () {
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
})

module.exports = NewsList;
