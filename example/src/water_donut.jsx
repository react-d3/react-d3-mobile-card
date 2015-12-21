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
    return '<div><b>更新時間：' + d.updateAt + '</b></div>'
    + '有效蓄水量：' + d.volumn;
  }

  var cards= [];

  for(var key in data) {
    var titleSet = title(data[key]);
    var maxSet = max(data[key]);
    var valueSet = value(data[key]);
    var noteSet = note(data[key]);

    cards.push(
      <RatioCard
        key= {key}
        data= {data[key]}
        width= {width}
        height= {height}
        title= {titleSet}
        max= {maxSet}
        value= {valueSet}
        note= {noteSet}
        colorDomain= {[.25, .50, 1]}
        colorRange= {['rgb(26,152,80)', 'rgb(255, 160, 119)', 'rgb(165,0,38)']}
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
