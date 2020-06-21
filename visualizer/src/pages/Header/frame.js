import React from 'react';
import './styles/frame.scss';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineReload,AiFillCaretDown} from 'react-icons/ai';
const types=['Bubble','Merge', 'Quick','Insertion']
const Headerframe = () => {
    return (
        <header className="headerContainer">
            <h1><span className="left">SORT</span> IT</h1>
            <div class="headerIcons">
                <FaPlay className="icons"/>
                <AiOutlineReload className="icons"/>
            </div>
            <div className="headerDropdown">
                <h2>Bubble Sort</h2>
                <AiFillCaretDown className="downArrow"/>
                <div className="content">
                    {types.map(type=>(
                      <h7 key={type}>{type}</h7>
                    ))}
                    
                </div>
            </div>
        </header>
    )
}
export default Headerframe;
