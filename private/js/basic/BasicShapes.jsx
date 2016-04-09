import React from 'react';
import Paper from 'material-ui/lib/paper';

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

class BasicShapes extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contents : createHtml()
    }
    console.log(createHtml());
  }

  componentDidMount(){
    console.log("calling componentDidMount");
    draw();
  }
  createMarkup(){
    return {__html: ''}
  }

  render(){
    console.log(this.state.contents);
    return(
      <div>
        <Paper
          zDepth = {4}
          style = {paperStyle}
        >
          Basic Shapes
        </Paper>
        {createHtml()}
        {draw()}
      </div>

    );
  }
}

export default BasicShapes;

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
  return <div class='container'>
      <h2> Lorem Ipsum </h2>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <div id='circles'></div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
      </p>
  </div>
}
