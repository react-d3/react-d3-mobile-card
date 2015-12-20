"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import Title from './title';
import Note from './note';
import d3 from 'd3';
import {Tag} from 'react-visual-graphic';

export default class TagCard extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    itemClass: "react-d3-mobile-card__item",
    margins: {left: 30, bottom: 30, right: 30, top: 30}
  }

  render() {

    const {
      data,
      width,
      height,
      margins,
      title,
      value,
      color,
      note,
      itemClass,
      titleClass,
      noteClass
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
        <div>
          <svg
            width= {width}
            height= {height / 3 + margins.bottom}
            >
            <g transform= {`translate(${margins.left}, ${margins.top})`}>
              <Tag
                width= {width - margins.left - margins.right}
                height= {height / 3 - margins.top}
                text= {value}
                color= {color}
                textColor= {'#FFF'}
              />
            </g>
          </svg>
        </div>
        <Note
          note= {note}
          noteClass= {noteClass}
        />
      </div>
    )

  }
}
