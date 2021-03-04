import { lazy, Suspense, useState, useEffect } from 'react';
import styles from './async.css';
const Demo = lazy(() => import('./demo'));
export default function() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 3000);
  });
  return (
    <>
      {flag ? (
        <div className={styles.normal}>
          <h1>Page async</h1>
          <Suspense fallback={<div>...loading</div>}>
            <Demo></Demo>
          </Suspense>
        </div>
      ) : (
        <div>hello </div>
      )}
    </>
  );
}
