import React from 'react';
import Header from './pages/Header/frame';

const App = () => {
    const [type,setType]=React.useState('Bubble')
    return (
        <>
         <Header sortType={type} setType={setType}/>   
        </>
    )
}
export default App;
