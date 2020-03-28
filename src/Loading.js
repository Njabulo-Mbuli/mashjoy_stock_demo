import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

let Loading = () => {
    return (<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress color="primary" />
    </div>)
}

export default Loading