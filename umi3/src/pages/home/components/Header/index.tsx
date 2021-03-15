import { memo, useState } from 'react';
import { Picker, List, WhiteSpace, Calendar } from 'antd-mobile';
import dayjs from "dayjs";
import './index.less';
interface Citys {
  label: string;
  value: string;
}

const city: Citys[] = [
  { label: '杭州', value: '10001' },
  { label: '苏州', value: '10002' },
];

function Header() {
  const [citys, setCitys] = useState(city);
  const [dateShow, setDateShow] = useState(false);
  const [times,setTimes] = useState('')
  const [selectCity, setSelectCity] = useState();

  //   select选择事件
  const selectValue = (val: any) => {
    setSelectCity(val);
  };
  const handleDate = ()=>{
    setDateShow(!dateShow)
  }
  //   日期关闭
  const handleCancel = () => {
    setDateShow(!dateShow)
  };
  // 日期确认
  const handleConfirm = (startTime:any,endTime:any) => {
      const date = dayjs(startTime).format('YYYY-MM-DD') + `~` + dayjs(endTime).format('YYYY-MM-DD')
      setTimes(date)
      setDateShow(!dateShow)
  };
  return (
    <>
      <div className="border mt-1">
        <Picker
          data={citys}
          title="请选择城市"
          extra="请选择(可选)"
          cols={1}
          onChange={selectValue}
          value={selectCity}
        >
          <List.Item arrow="horizontal" >可选城市</List.Item>
        </Picker>
      </div>
      <div className="border border-top-0 overflow-auto">
       <List.Item className="overflow-visible" extra={times} arrow="horizontal" onClick={handleDate}>请选择时间</List.Item>
      </div>
      <Calendar
          visible={dateShow}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        ></Calendar>
    </>
  );
}

export default memo(Header);
