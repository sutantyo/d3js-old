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
      <h2>Working with data</h2>

      <p>
        The simple data format to work with is JSON,
      </p>

      <p>
        The second most popular method is to work with CSV. In this
        example we are going to use the file <a href="/data/basic/poly.csv">
        poly.csv</a> with the following contents:
      </p>
      <CodeBlock lang='csv'><sanitise>polynomial, cycle size, number of trees, largest tree size, average tree size, largest tree height, average tree height,tallest tree height, tallest tree size
        x^2+2,4,4,6,3.25,4,2.75,4,6
        x^2+3,5,5,6,2.60,4,2.20,4,6
        x^2+4,6,6,4,2.17,3,2.00,3,4
        x^2+5,2,2,10,6.50,6,4.50,6,10

      </sanitise>
      </CodeBlock>

      <CodeCard lang='c++' title='Sample C++ code'>
        <sanitise>
          #include<iostream>
          using namespace std;

          int main()
          {
            cout << "Hello world" << endl;
          }
        </sanitise>
      </CodeCard>
  </div>
}
