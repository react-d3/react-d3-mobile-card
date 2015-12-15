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
      data,
      noteClass
    } = this.props;

    var noteContent = {__html: note(data)};

    return (
      <div className= {noteClass} dangerouslySetInnerHTML= {noteContent}>
      </div>
    )
  }
}
