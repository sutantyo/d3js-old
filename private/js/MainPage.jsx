import React from 'react';
import Menu from './basic/Menu';
import FlatButton from 'material-ui/lib/flat-button';

import BasicShapes from './basic/BasicShapes';

class MainPage extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        currentPage: <Menu />
      }
    }

    handleClick(){
      this.setState(
        {currentPage: <BasicShapes />}
      );
    }

    render(){
      //{this.state.currentPage}
      return (
        <div>
          <BasicShapes />
        </div>
      );
    }
}



export default MainPage;