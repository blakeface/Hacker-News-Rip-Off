import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import url from 'url';

const hackerNewsUrl = 'https://news.ycombinator.com';

class NewsItem extends Component {
  getDomain () {
    return url.parse(this.props.item.url).hostname;
  }

  getTitle () {
    return (
      <div>
      <a className="news-item-title"href={this.props.item.url}>{this.props.item.title}</a>
      <span className="news-item-domain">
      ({this.getDomain()})
      </span>
      </div>
    );
  }

  getCommentLink () {
    let commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length) {
      commentText = this.props.item.kids.length + ' comments';
    }
    return (
      <a href={hackerNewsUrl + '/item?id=' + this.props.item.id}>{commentText}</a>
    );
  }
  getSubText () {
    return (
      <div className='news-item-subtext'>
        {this.props.item.score}
        points by <a href={hackerNewsUrl + '/user?id=' + this.props.item.by}>{this.props.item.by}</a>
        {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
    );
  }

  getRank () {
    return (
      <div className='news-item-rank'>
        {this.props.rank}.
      </div>
    );
  }
  getVote () {
    return (
      <div className='news-item-vote'>
        <a href={hackerNewsUrl + '/vote?for=' + this.props.item.id + '&dir=up&whence=news'}>
          <img src="../img/arrow.gif" width="10"/>
        </a>
      </div>
    );
  }

  render () {
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
  }
}

export default NewsItem;
