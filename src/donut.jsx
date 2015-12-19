"use strict";

import {
  default as React,
  Component,
} from 'react';

import ReactFauxDOM from 'react-faux-dom';
import d3 from 'd3';

export default class Donut extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    colorRange: ['#f00', '#00f']
  }

  _mkPie (dom) {
    const {
      width,
      height,
      radius,
      maxVal,
      pieVal,
      colorRange
    } = this.props;

    var color = d3.scale.linear()
                  .domain([0, 1])
                  .range(colorRange)

    var arc = d3.svg.arc()
      .outerRadius(radius)
      .innerRadius(radius - 10);

    var pie = d3.layout.pie()
      .value((d) => { return d.value; })
      .sort((a, b) => { return; })

    var ratio = [{
      name: "item",
      value: (pieVal / maxVal)
    }, {
      name: "other",
      value: (1 - pieVal / maxVal)
    }];

    var pieDom = d3.select(dom);

    var g = pieDom.selectAll('.arc')
              .data(pie(ratio))
            .enter().append('g')
              .attr('class', 'arc');

    g.append("path")
      .attr("d", arc)
      .style("fill", (d) => { return d.data.name === 'item'? color(d.data.value): '#EEE'; })
      .style("stroke", "#FFF")

    g.append("text")
      .attr("y", 10)
      .attr("text-anchor", "middle")
      .attr("font-size", 40)
      .attr("font-family", "Verdana")
      .text(((pieVal / maxVal) * 100).toFixed(1) + "%")

    return pieDom;
  }

  render() {

    const{
      width,
      height
    } = this.props;

    var t = `translate(${width / 2},  ${height / 2})`;

    var pieChart = ReactFauxDOM.createElement('g');
    pieChart.setAttribute("transform", t);
    pieChart.setAttribute("ref", "react-d3-mobile-card__pie")
    var pie = this._mkPie(pieChart);

    return pie.node().toReact();
  }
}
