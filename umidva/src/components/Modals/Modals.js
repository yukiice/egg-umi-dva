import React, { PureComponent } from 'react';
import CreatePotal from '../CreatePortal/CreatePotal';
import { Icon } from 'antd-mobile';
import styles from './styles.css'
export default class Modals extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    //   点击后关闭
    const { onClose } = this.props;
    onClose && onClose();
  };
  render() {
    const { show } = this.props;
    return (
      <>
        {show ? (
          <CreatePotal className={styles.modal}> 
            <div className={styles.body}>
              {this.props.children}
              <Icon type="cross" size="lg" className={styles.close} onClick={this.handleClick}></Icon>
            </div>
          </CreatePotal>
        ) : (
          <div>不显示 </div>
        )}
      </>
    );
  }
}
