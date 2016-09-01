const React = require('react');
const _ = require('lodash');

const NewsHeader = require('./newsHeader');
const NewsItem = require('./newsItem');

const NewsList = React.createClass({
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
      </div>
    );
  }
})

module.exports = NewsList;
