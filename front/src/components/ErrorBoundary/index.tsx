import React, { memo ,useState} from 'react'

export default memo(function ErrorBoundary(props) {
    const [flags, setflags] = useState(false)
    const getDerivedStateFromError = (error:any) =>{
        console.log(error)
        setflags(true)
    }
    return (
        <div>
            {
            flags?<h1>发生了错误</h1>:props.children
        }
        </div>
    )
})

