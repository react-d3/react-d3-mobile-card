"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    titleClass: "react-d3-mobile-card__title"
  }

  render() {
    const {
      title,
      data,
      titleClass
    } = this.props;

    var titleContent = title(data);

    return (
      <div className= {titleClass}>
        <h2>
          {titleContent}
        </h2>
      </div>
    )
  }
}
