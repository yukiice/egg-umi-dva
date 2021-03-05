import { useState } from 'react';
import Modals from '@/components/Modals/Modals';
import { Button } from "antd-mobile";
export default function() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={()=>setShow(true)}>点击关闭</Button>
      <Modals onClose={() => setShow(false)} show={show}>modal</Modals>
    </div>
  );
}
