"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import {
  default as Title
} from './title';

import {
  default as RatioDonut
} from './ratio_donut';

import {
  default as Note
} from './note';

import d3 from 'd3';

export default class RatioCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      data,
      width,
      height,
      title,
      max,
      value,
      note,
      colorRange,
      titleClass,
      donutClass,
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
        <RatioDonut
          width= {width}
          height= {height}
          max= {max}
          value= {value}
          data= {data}
          colorRange= {colorRange}
          donutClass= {donutClass}
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
