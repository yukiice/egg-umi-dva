import React, { PureComponent } from 'react'
import { SearchBar } from "antd-mobile";
export default class Search extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
  }
  changeValue =(value)=>{
    this.setState({
      value
    }) 
  }
  submitValue=()=>{
    this.props.dispatch(
      {
        type:'search/getListsAsync',
        payload:this.state.value
        
      }
      )
  }
  render() {

    return (
      <>
       <SearchBar autoFocus value={this.state.value} onChange={this.changeValue} onSubmit={this.submitValue}>
         
       </SearchBar>
      </>
    )
  }
}
