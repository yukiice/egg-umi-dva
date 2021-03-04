import React, { Component } from 'react';

export default class Id extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log(this.props);
    return (
      <>
        <h1>id</h1>
      </>
    );
  }
}
