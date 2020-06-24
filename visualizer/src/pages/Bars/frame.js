import React from 'react';
import './styles/frame.scss';

const Barframe = React.memo(({array,colors}) => {
    console.log('bar')
    return (
        <div className="barContainer">
            {array.map((bar,index)=>{
                return <div key={index} className="bar" style={{height:`${bar}px`,background:colors[index]}}></div>
            })}
        </div>
    )
});
export default Barframe;
