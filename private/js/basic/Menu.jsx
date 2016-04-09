import React from 'react';
import Masonry from 'react-masonry-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MenuItem from './MenuItem'

import BasicShapes from './BasicShapes';


let itemList = {};
itemList["BasicShapes"] = BasicShapes;

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
  pageChange(name){
      this.setState({
        showmenu : false,
        pageName : name
      });
  }
  componentDidMount(){
      this.setState({
        showmenu : false,
        pageName : 'BasicShapes'
      });
  }
  render(){
    let currentPage;
    if (this.state.showmenu == true){
      currentPage = createInitialPage(this.pageChange.bind(this));
    }
    else{
      currentPage = createPage(this.state.pageName);
      //currentPage = <BasicShapes></BasicShapes> ;
      //console.log(currentPage);
    }
    return(
      <ReactCSSTransitionGroup transitionName="menu" transitionEnterTimeout={2000} transitionLeaveTimeout={1000}>
        {currentPage}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Menu;

let menuData = [ { name: "BasicShapes", width: "24%", height:"200px", color: "white" },
                 { name: "Second", width: "24%", height:"200px", color: "white" },
                 { name: "Third", width: "24%", height:"600px", color: "white" },
                 { name: "Fourth", width: "24%", height:"600px", color: "green" },
                 { name: "Fifth", width: "24%", height:"600px", color: "green" }
               ];

let createInitialPage = function(pageChangeCB){
  let elements = menuData.map(element =>
    <MenuItem key={element.name} element={element} pageChange={pageChangeCB}/>
  );
  let initialPage = <Masonry element-type='menuitem'>
      {elements}
  </Masonry>
  return initialPage;
};

let createPage = function(pageName){
  return React.createElement(itemList[pageName],{key:pageName});
}







  /*
 let initialPage = React.createElement('Masonry',
                     { className:  'my-gallery-class', // default ''
                       elementType:'menuitem', // default 'div'
                       options: masonryOptions, // default {}
                       disableImagesLoaded:false, // default false
                       style:{
                         margin: '100px 0 100px 0 auto'
                       }
                     },
                     elements);
  */
