const $ = require('jquery');
const React = require('react');
const moment = require('moment');
const url = require('url');
const hackerNewsUrl = 'https://news.ycombinator.com';

const NewsItem = React.createClass({
  getDomain: function () {
    return url.parse(this.props.item.url).hostname;
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

  getCommentLink: function () {
    let commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length) {
      commentText = this.props.item.kids.length + ' comments';
    }
    return (
      <a href={hackerNewsUrl + '/item?id=' + this.props.item.id}>{commentText}</a>
    );
  },
  getSubText: function () {
    return (
      <div className='news-item-subtext'>
        {this.props.item.score}
        points by <a href={hackerNewsUrl + '/user?id=' + this.props.item.by}>{this.props.item.by}</a>
        {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
    );
  },

  getRank: function () {
    return (
      <div className='news-item-rank'>
        {this.props.rank}. 
      </div>
    );
  },
  getVote: function () {
    return (
      <div className='news-item-vote'>
        <a href={hackerNewsUrl + '/vote?for=' + this.props.item.id + '&dir=up&whence=news'}>
          <img src="../img/arrow.gif" width="10"/>
        </a>
      </div>
    );
  },

  render: function () {
    return (
      <div className='news-item'>
        {this.getRank()}
        {this.getVote()}
        <div className='news-item-itemText'>
          {this.getTitle()}
          {this.getSubText()}
        </div>
      </div>
    );
  },
})

module.exports = NewsItem;
