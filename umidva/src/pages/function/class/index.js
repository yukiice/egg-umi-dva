import React, { memo ,useState,useEffect} from 'react'
import {useTitleHook} from '@/hooks'
export default memo(function Index(props) {
  const [state,setState] = useState('function')
  const title = useTitleHook(state)
  useEffect(() =>{
    
  },[])
  return (
    <div>
      <h1 onClick={()=>setState('func change!')}>{title}</h1>
    </div>
  )
})
