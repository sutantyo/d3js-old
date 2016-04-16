import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';

class CodeBlock extends React.Component{
  constructor(props){
    super(props);
    // we're supposedly not allowed to modify props, but this was ok???
    // (pass by reference)
    removeStartingWhiteSpace(this.props.children);
  }

  componentDidMount(){
    let current = ReactDOM.findDOMNode(this);
    hljs.highlightBlock(current);
  }

  render(){
    return(
      <pre><code className={this.props.lang}>
        {this.props.children}
      </code></pre>
    )
  }
}

export default CodeBlock;


// Code to remove starting whitespace on a code block.
// An example of a code written in CodeBlock looks like this:
//    <CodeBlock>
//    #include<iostream>
//    int main(){
//      std::cout << "Hello world" << std::endl;
//    }
//    </CodeBlocK>
// and this codeblock is passed verbatim with all the whitespaces.
// The following function removes these whitespaces, and also the starting
// end-of-line characters.

let removeStartingWhiteSpace = function(originalCode){

  // If the first line is just an empty line, skip it (by setting i = 1)
  // otherwise process it by setting i = 0;
  let i = 0;
  while (originalCode[i] == '\n'){
    i++;
  }

  // Remove whitespace at start of line: look at the first non-empty line, count
  // how many spaces at the start of the line, and remove them
  // If a non-empty line is found without a starting whitespace, then offset is 0
  let offSetFound = false;
  let offSet = 0;
  for(; i < originalCode.length; i++){
    if (!offSetFound && originalCode[i] != '' && originalCode[i][0].startsWith(' ')){
      while(originalCode[i].charAt(0) === ' '){
        originalCode[i] = originalCode[i].substr(1);
        offSet++;
      }
      offSetFound = true;
    }

    // if offset has been found, then delete this many whitespaces from
    // start, or until you find a non-space character
    else{
      var j = 0;
      while(originalCode[i].charAt(0) === ' ' && j < offSet){
        originalCode[i] = originalCode[i].substr(1);
        j++;
      }
    }
  }
}
