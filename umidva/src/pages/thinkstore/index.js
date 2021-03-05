import { StoreProvider } from 'think-react-store';
import log from 'think-react-store/middlewares/log'
import { useState, useEffect } from 'react';
import User from './user';
import * as store from './stores';
export default function() {
  const [state, setState] = useState();
  useEffect(() => {});
  return (
    <StoreProvider store={store} middleware={[log]}>
      <User></User>
    </StoreProvider>
  );
}
