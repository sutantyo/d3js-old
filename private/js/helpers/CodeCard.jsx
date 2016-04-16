import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


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
