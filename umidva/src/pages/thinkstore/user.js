import React, { memo, useEffect } from 'react';
import { useStoreHook } from 'think-react-store';
export default memo(function User() {
  const {
    user: { id, username, getUserAsync },
  } = useStoreHook();
  useEffect(() => {
    getUserAsync({
      id: 10,
      username: 'yukiice',
    });
  }, [getUserAsync]);
  const handleClick = () => {
    getUserAsync({
      id: 50,
      username: 'huahua',
    });
  };
  return (
    <div>
      <div>user-id: {id}</div>
      <div>username:{username}</div>
      <button onClick={handleClick}>点击我</button>
    </div>
  );
});
