"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import {
  default as Donut
} from './donut';

import d3 from 'd3';

export default class RatioDonut extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    donutClass: "react-d3-mobile-card__ratio_donut"
  }

  render() {
    const {
      max,
      value,
      data,
      width,
      height,
      colorRange,
      donutClass
    } = this.props;

    var radius = d3.min([width, height / 2]) / 2;
    var maxVal = max(data);
    var pieVal = value(data);

    return (
      <div>
        <svg
          width= {width}
          height= {height / 2}
          className= {donutClass}
        >
          <Donut
            width= {width}
            height= {height / 2}
            radius= {radius}
            maxVal= {maxVal}
            pieVal= {pieVal}
            colorRange= {colorRange}
          />
        </svg>
      </div>
    )
  }
}
