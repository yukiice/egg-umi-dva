import React, { Component } from 'react'

export default class Layout extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
        <h2>
            class header
        </h2>
        {this.props.children}
      </>
    )
  }
}


