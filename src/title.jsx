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
      titleClass
    } = this.props;

    return (
      <div className= {titleClass}>
        <h2>
          {title}
        </h2>
      </div>
    )
  }
}
