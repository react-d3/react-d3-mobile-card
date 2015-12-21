"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import Title from './title';
import RatioDonut from './ratio_donut';
import Note from './note';
import d3 from 'd3';

export default class RatioCard extends Component {
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
      max,
      value,
      note,
      colorRange,
      colorDomain,
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
          colorDomain= {colorDomain}
          donutClass= {donutClass}
        />
        <Note
          note= {note}
          noteClass= {noteClass}
        />
      </div>
    )

  }
}
