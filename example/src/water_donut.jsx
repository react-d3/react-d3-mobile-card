"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var RatioCard = require('../../lib/index').RatioCard;

// Example
(function() {
  var width = 300;
  var height = 400;
  var data = require('json!../data/water.json');
  var title = function(d) { return d.name; }
  var max = function(d) {return 100; };
  var value = function(d) { return d.percentage; }
  var note = function(d) {
    return 'hi, here is your note area';
  }

  var cards= [];

  for(var key in data) {
    cards.push(
      <RatioCard
        key= {key}
        data= {data[key]}
        width= {width}
        height= {height}
        title= {title}
        max= {max}
        value= {value}
        note= {note}
        colorRange= {['rgb(26,152,80)', 'rgb(165,0,38)']}
        titleClass= {"title-test-class"}
        donutClass= {"donut-test-class"}
        noteClass= {"note-test-class"}
      />
    )
  }


  ReactDOM.render(
    <div>
      {cards}
    </div>
  , document.getElementById('blank-water')
  )
})()
