const $ = require('jquery');
const React = require('react');
const moment = require('moment');

const url = require('url')

const NewsItem = React.createClass({
  getDomain: function () {
    return url.parse(this.props.item.url).hostname;
  },
  getCommentLink: function () {
    let commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length) {
      commentText = this.props.item.kids.length + ' comments';
    }
    return (
      <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
    );
  },
  getTitle: function () {
    return (
      <div>
        <a className="news-item-title"href={this.props.item.url}>{this.props.item.title}</a>
        <span className="news-item-domain">
          ({this.getDomain()})
        </span>
      </div>
    );
  },
  getSubText: function () {
    return (
      <div className='news-item-subtext'>
        {this.props.item.score}
        points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a>
        {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
    )
  },
  render: function () {
    return (
      <div className='news-item'>
        {this.getTitle()}
        {this.getSubText()}
      </div>
    );
  },
})

module.exports = NewsItem;
