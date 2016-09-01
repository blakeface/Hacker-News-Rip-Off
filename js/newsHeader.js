const $ = require('jquery');
const React = require('react');
const _ = require('lodash');

const hackerNewsUrl = 'https://www.ycombinator.com'

const NewsHeader = React.createClass({
  getLogo: function () {
    return (
      <div className='news-header-logo'>
        <a href={hackerNewsUrl}><img src='../img/logo.gif' /></a>
      </div>
    );
  },
  getTitle: function () {
    return (
      <div className='news-header-title'>
        <a className='news-header-text' href={hackerNewsUrl}>
          Hacker News
        </a>
      </div>
    );
  },
  getNav: function () {
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
  },

  render: function () {
    return (
      <div className='news-header'>
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
      </div>
    );
  },
});

module.exports = NewsHeader;
