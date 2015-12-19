"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import Title from './title';
import OrdinalItem from './ordinal';
import Note from './note';
import d3 from 'd3';

export default class OrdinalCard extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    itemClass: "react-d3-mobile-card__item"
  }

  render() {

    const {
      data,
      width,
      height,
      title,
      value,
      note,
      titleClass,
      ordinalRange,
      ordinalDomain,
      ordinalClass,
      noteClass,
      itemClass
    } = this.props;

    var cardStyle = {
      height: height,
      width: width,
      float: 'left'
    };

    return (
      <div
        style= {cardStyle}
        itemClass= {itemClass}
        >
        <Title
          data= {data}
          title= {title}
          titleClass= {titleClass}
        />
        <OrdinalItem
          width= {width}
          height= {height / 2}
          value= {value}
          data= {data}
          ordinalRange= {ordinalRange}
          ordinalDomain= {ordinalDomain}
          ordinalClass= {ordinalClass}
        />
        <Note
          data= {data}
          note= {note}
          noteClass= {noteClass}
        />
      </div>
    )

  }
}
