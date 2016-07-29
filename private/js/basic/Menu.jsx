import React from 'react';
import Masonry from 'react-masonry-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MenuItem from './MenuItem'

import hljs from 'highlight.js';

import Basic from './Basic';
import BasicShapes from './BasicShapes';
import ForceLayout from '../advanced/ForceLayout';


let itemList = {};
itemList["Basic"] = Basic;
itemList["BasicShapes"] = BasicShapes;
itemList["ForceLayout"] = ForceLayout;

let menuData = [ { name: "Basic", title: "The Basics",
                      width: "24%", height:"200px", color: "white" },
                 { name: "BasicShapes", title: "Basic Shapes",
                      width: "24%", height:"200px", color: "white" },
                 { name: "BasicLines", title: "Basic Lines",
                      width: "24%", height:"200px", color: "white" },
                 { name: "BasicCharts", title: "Simple Charts",
                      width: "24%", height:"200px", color: "white" },
                 { name: "BasicData", title: "Working with Data",
                      width: "24%", height:"200px", color: "white" },
                 { name: "BasicAnimations", title: "Simple Animations",
                      width: "24%", height:"200px", color: "white" },
                 { name: "ForceLayout", title: "Force Layout",
                      width: "24%", height:"200px", color: "white" }
               ];

const masonryOptions = {
    transitionDuration: 0
};

class Menu extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showmenu : true
    }
  }
  pageChange(title){
      this.setState({
        showmenu : false,
        pageName : title
      });
  }
  componentDidMount(){
  }
  componentDidUpdate(){
  }
  render(){
    let currentPage;
    if (this.state.showmenu == true){
      currentPage = createInitialPage(this.pageChange.bind(this));
    }
    else{
      console.log(this.state.pageName);
      currentPage = createPage(this.state.pageName);
      //currentPage = <BasicShapes></BasicShapes> ;
    }
    return(
      <ReactCSSTransitionGroup transitionName="menu" transitionEnterTimeout={1000} transitionLeaveTimeout={500}>
        {currentPage}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Menu;

let createInitialPage = function(pageChangeCB){
  let elements = menuData.map(element =>
    <MenuItem key={element.name} element={element} pageChange={pageChangeCB}/>
  );
  let initialPage = <Masonry>
      {elements}
  </Masonry>
  return initialPage;
};

let createPage = function(pageName){
  return React.createElement(itemList[pageName],{key:pageName});
}
