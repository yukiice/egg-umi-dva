import React, { PureComponent } from 'react'

export default class ErrorBoundary extends PureComponent {
    constructor(props){
        super(props)
        this.state ={
            flag:false
        }
    }
    static getDerivedStateFromError(error){
        console.log(error)
        return {
            flag:true
        }
    }
    componentDidCatch(error,info){
        
    }
  render() {
    return (
      <>
        {
            this.state.flag?<h1>发生了错误</h1>:this.props.children
        }
      </>
    )
  }
}
