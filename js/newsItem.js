const $ = require('jquery');
const React = require('react');

const NewsItem = React.createClass({
  render: function () {
    return (
      <div className='news-item'>
        <a className='news-item-title' href='{this.props.item.url}'>{this.props.item.title}</a>
      </div>
    );
  }
})

module.exports = NewsItem;
