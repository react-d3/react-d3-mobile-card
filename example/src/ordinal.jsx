"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var OrdinalCard = require('../../lib/index').OrdinalCard;

// Example
(function() {
  var width = 300;
  var height = 400;
  var data = require('json!../data/air.json');
  var title = function(d) { return d.SiteName; }
  var value = function(d) { return d.Status; }
  var note = function(d) {
    return 'hi, here is your note area';
  }

  var cards = data.map(function(d, i) {
    return (
      <OrdinalCard
        key= {i}
        data= {d}
        width= {width}
        height= {height}
        title= {title}
        value= {value}
        note= {note}
        ordinalRange= {['./img/PSI-1.png', './img/PSI-2.png']}
        ordinalDomain= {['良好', '普通']}
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
