import React, { PureComponent } from 'react';
import { List } from 'antd-mobile';
export default class Lists extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
   const {text,lists} = this.props.search;
    return (
      <>
        <h1>text:{text}</h1>
        <List>
          {
              lists.map((item,index)=>{
                  return (
                    <List.Item key={index}>
                        {item}
                    </List.Item>
                  )
              })
          }
        </List>
      </>
    );
  }
}
