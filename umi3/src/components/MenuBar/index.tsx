import React, { memo } from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';
import {
  BsHouseDoorFill,
  BsHouseDoor,
  BsBagFill,
  BsBag,
  BsPersonFill,
  BsPerson,
} from 'react-icons/bs';
import './index.less';

interface IProps {
  show: boolean;
  pathname: string;
}
interface ItemObj {
  title: string;
  selectedIcon: any;
  icon: any;
  link: string;
}
const item: ItemObj[] = [
  {
    title: '首页',
    selectedIcon: <BsHouseDoorFill className="icon-size"></BsHouseDoorFill>,
    icon: <BsHouseDoor className="icon-size"></BsHouseDoor>,
    link: '/',
  },
  {
    title: '订单',
    selectedIcon: <BsBagFill className="icon-size"></BsBagFill>,
    icon: <BsBag className="icon-size"></BsBag>,
    link: '/order',
  },
  {
    title: '我的',
    selectedIcon: <BsPersonFill className="icon-size"></BsPersonFill>,
    icon: <BsPerson className="icon-size"></BsPerson>,
    link: '/user',
  },
];

export default memo(function MenuBar(props: IProps) {
  const { pathname, show } = props;
  return (
    <div className="menu-bar">
      <TabBar hidden={!show}>
        {item.map((item) => {
          return (
            <TabBar.Item
              icon={item.icon}
              title={item.title}
              key={item.link}
              selectedIcon={item.selectedIcon}
              selected={pathname ===item.link}
              onPress={() => history.push(item.link)}
            ></TabBar.Item>
          );
        })}
      </TabBar>
    </div>
  );
});
