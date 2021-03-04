import React, { Component } from 'react';
import { List } from 'antd-mobile'; 
import { Link } from 'umi';
export default class Index extends Component {
  render() {
    return (
      <>
        <List>
          <List.Item>
            <Link to="/class/component-old">component-old</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/component-new">component-new</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/async/async">async</Link>
          </List.Item>
        </List>
      </>
    );
  }
}
