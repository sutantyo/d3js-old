import React from 'react';
import Menu from './basic/Menu';
import FlatButton from 'material-ui/FlatButton';

import BasicShapes from './basic/BasicShapes';

class MainPage extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        currentPage: <Menu />
      }
    }

    render(){
      return (
        <div>
          <Menu></Menu>
        </div>
      );
    }
}



export default MainPage;
