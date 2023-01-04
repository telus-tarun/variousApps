import React, {Component} from "react";

export default class About extends Component{


  shouldComponentUpdate(prevprop, prevstate){
    return prevprop.counter !== this.props.counter;   //true
  }

  componentDidUpdate(prevprop, prevstate){
    // console.log(prevprop.counter);
    // console.log(this.props.counter);
    // console.log("Prop updated successfully!!");
  }

  
  render(){
    return(
      <>
      <div>{this.props.counter}</div>
      
      </>
    )
  }
}