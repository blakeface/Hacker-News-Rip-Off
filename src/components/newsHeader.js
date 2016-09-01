import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';

const hackerNewsUrl = 'https://www.ycombinator.com'

class NewsHeader extends Component {
  getLogo () {
    return (
      <div className='news-header-logo'>
        <a href={hackerNewsUrl}><img src='src/img/logo.gif' /></a>
      </div>
    );
  }
  getTitle () {
    return (
      <div className='news-header-title'>
        <a className='news-header-text' href={hackerNewsUrl}>
          Hacker News
        </a>
      </div>
    );
  }
  getNav () {
    const navLinks = [
      {
        name: 'new',
        url: 'newest',
      },
      {
        name: 'comments',
        url: 'newComments',
      },
      {
        name: 'show',
        url: 'show',
      },
      {
        name: 'ask',
        url: 'ask',
      },
      {
        name: 'jobs',
        url: 'jobs',
      },
      {
        name: 'submit',
        url: 'submit',
      },
    ];
    return (
      <div className='news-header-nav'>
        {_(navLinks).map(function (navLink) {
          return (
            <a key={navLink.url}
              className='news-header-navLink news-header-text'
              href={hackerNewsUrl + 'navLink.url'}>
              {navLink.name}
            </a>
          );
        }).value()}
      </div>
    )
  }
  getLogin () {
    return (
      <div className='news-header-login'>
        <a className='news-header-text' href={hackerNewsUrl + '/login?whence=news'}>Login</a>
      </div>
    );
  }

  render () {
    return (
      <div className='news-header'>
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
        {this.getLogin()}
      </div>
    );
  }
};

export default NewsHeader;
