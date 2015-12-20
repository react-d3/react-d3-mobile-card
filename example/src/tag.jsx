"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var TagCard = require('../../lib/index').TagCard;

// Example
(function() {
  var width = 300;
  var height = 400;
  var air = require('json!../data/air.json');
  var data = air[0].data;
  var title = function(d) { return d.SiteName; }
  var pm = function(d) { return d['PM2_5']; }
  // var value = function(d) { return d.Status; }
  var note = function(d) {
    return '<div>狀態：' + d.Status + '</div><div>PM2.5：' + d['PM2_5'] + '</div>';
  }

  var cards = data.map(function(d, i) {

    var pmSet = pm(d);
    var color;
    var text;

    if(pmSet < 12 && pmSet >= 0) {
      color = 'rgb(156, 255, 156)';
      text = '低';
    }else if(pmSet < 24 && pmSet >= 12) {
      color = 'rgb(49, 255, 0)';
      text = '低'
    }else if(pmSet < 36 && pmSet >= 24) {
      color = 'rgb(49, 207, 0)';
      text = '低'
    }else if(pmSet < 42 && pmSet >= 36) {
      color = 'rgb(255, 255, 0)';
      text = '中'
    }else if(pmSet < 48 && pmSet >= 42) {
      color = 'rgb(255, 207, 0)';
      text = '中'
    }else if(pmSet < 54 && pmSet >= 48) {
      color = 'rgb(255, 154, 0)'
      text = '中'
    }else if(pmSet < 59 && pmSet >= 54) {
      color = 'rgb(255, 100, 100)'
      text = '高'
    }else if(pmSet < 65 && pmSet >= 59) {
      color = 'rgb(255, 0, 0)'
      text = '高'
    }else if(pmSet < 71 && pmSet >= 65) {
      color = 'rgb(153, 0, 0)'
      text = '高'
    }else if(pmSet >= 71) {
      color = 'rgb(206, 48, 255)'
      text = '非常高'
    }

    // var valueSet = value(d);
    var noteSet = note(d);
    var titleSet = title(d);

    return (
      <TagCard
        key= {i}
        data= {d}
        width= {width}
        height= {height}
        title= {titleSet}
        margins= {{left: 30, bottom: 30, right: 30, top: 30}}
        value= {text}
        color= {color}
        note= {noteSet}
      />
    )
  })


  ReactDOM.render(
    <div>
      {cards}
    </div>
  , document.getElementById('blank-tag')
  )
})()
