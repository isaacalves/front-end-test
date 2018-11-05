import React, { Component } from 'react';
// import ReactHtmlParser from 'react-html-parser';
import { stripTags } from 'helpers/string'

class ListItem extends Component {
  render() {
    const bio = stripTags(this.props.bio);

    return (
      <div className="listitem">
        <div className="listitem__image-wrapper">
          { this.props.avatar !== '0'
            ? <img className="listitem__image" src={this.props.avatar} />
            : <div className="listitem__image-placeholder" ></div>
          }
        </div>
        <div className="listitem__details">
          <h2 className="listitem__details__name">{this.props.name}</h2>
          <div className="listitem__details__job">{this.props.title} at {this.props.company}</div>
          <div className="listitem__details__bio">{bio !== '0' && bio}</div>
        </div>
      </div>
    );
  }
}

export default ListItem;