import {useState,useEffect} from 'react';
import './home.less';
import Header from './components/Header';
import Hot from './components/Hot'
export default function Page() {
  return (
    <div className="container">
      <div>
        <Header></Header>
        <Hot></Hot>
      </div>
    </div>
  );
}
