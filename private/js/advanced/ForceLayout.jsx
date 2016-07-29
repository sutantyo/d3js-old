import React from 'react';

import CodeBlock from '../helpers/CodeBlock';
import CodeCard from '../helpers/CodeCard';

import hljs from 'highlight.js';

import d3 from 'd3';

let paperStyle = {
  verticalAlign: 'center',
  display: 'inline-block',
  height: '90px',
  minWidth: '400px',
  marginRight: '5px',
  marginLeft: '0.5%',
  marginTop: '15px',
  marginBottom: '0px',
}

class BasicData extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    draw();
  }

  render(){
    return(
      <div>
        {createHtml()}
      </div>
    );
  }
}

export default BasicData;

let draw = function(){
  console.log('calling draw');
  d3.select('#circles')
    .append('svg')
      .attr('width','100%')
      .attr('height','100%')
    .append('circle')
      .attr('cx',25)
      .attr('cy',25)
      .attr('r',25)
      .style('fill','purple')
}

let createHtml = function(){
  return <div className='container'>

  </div>
}
