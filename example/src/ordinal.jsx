"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var OrdinalCard = require('../../lib/index').OrdinalCard;

// Example
(function() {
  var width = 300;
  var height = 400;
  var air = require('json!../data/air.json');
  var data = air[0].data;
  var title = function(d) { return d.SiteName; }
  var value = function(d) { return d.Status; }
  var note = function(d) {
    return '<div>狀態：' + d.Status + '</div><div>PM2.5：' + d['PM2_5'] + '</div>';
  }

  var cards = data.map(function(d, i) {
    var titleSet = title(d);
    var valueSet = value(d);
    var noteSet = note(d);

    return (
      <OrdinalCard
        key= {i}
        data= {d}
        width= {width}
        height= {height}
        title= {titleSet}
        value= {valueSet}
        note= {noteSet}
        ordinalRange= {['./img/PSI-1.png', './img/PSI-2.png', './img/PSI-3.png']}
        ordinalDomain= {['良好', '普通', '不良']}
        titleClass= {"title-test-class"}
        ordinalClass= {"ordinal-test-class"}
        noteClass= {"note-test-class"}
      />
    )
  })


  ReactDOM.render(
    <div>
      {cards}
    </div>
  , document.getElementById('blank-ordinal')
  )
})()
