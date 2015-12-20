"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

export default class Note extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    noteClass: "react-d3-mobile-card__note"
  }

  render() {
    const {
      note,
      noteClass
    } = this.props;

    var noteContent = {__html: note};

    return (
      <div className= {noteClass} dangerouslySetInnerHTML= {noteContent}>
      </div>
    )
  }
}
