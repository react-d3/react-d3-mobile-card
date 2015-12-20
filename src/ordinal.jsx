"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import Donut from './donut';
import d3 from 'd3';

export default class OrdinalItem extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    ordinalClass: "react-d3-mobile-card__ordinal_item"
  }

  render() {
    const {
      value,
      data,
      width,
      height,
      ordinalRange,
      ordinalDomain,
      ordinalClass
    } = this.props;

    var scale = d3.scale.ordinal()
      .domain(ordinalDomain)
      .range(ordinalRange);

    return (
      <div>
        <img
          src= {scale(value)}
          height= {height}
          />
      </div>
    )
  }
}
