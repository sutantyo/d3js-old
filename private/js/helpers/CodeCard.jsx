import React from 'react';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import CardText from 'material-ui/Card/CardText';


import CodeBlock from './CodeBlock';


let codeCardStyle = {
  lineHeight: '120%'
}

class CodeCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Card>
        <CardHeader
          title={this.props.title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true} style={codeCardStyle}>
          <CodeBlock lang={this.props.lang}>
            {this.props.children}
          </CodeBlock>
        </CardText>
      </Card>
    )
  }
}

export default CodeCard;
