import React from "react";
import "./styles/frame.scss";
import { FaPlay } from "react-icons/fa";
import { AiOutlineReload, AiFillCaretDown } from "react-icons/ai";
const types = ["Bubble", "Merge", "Quick", "Insertion"];
const Headerframe = React.memo(({ sortType, setType}) => {
  const [count,setCount ]=React.useState(0)
  return (
    <header className="headerContainer">
      <h1>
        <span className="left">SORT</span> IT
      </h1>
      <div className="headerIcons">
        <FaPlay className="icons" />
        <AiOutlineReload className="icons" />
      </div>
      <div
        className="headerDropdown"
        onClick={()=>{setCount(prev=>prev+1)}}
      >
        <h2>{`${sortType} Sort`}</h2>
        <AiFillCaretDown className="downArrow" />
        {count%3!==0 ? (
          <div className="content">
            {types.map((type) => (
              <h7
                key={type}
                onClick={()=>{
                  setType((prev) => type);
                  setCount(prev=>prev+1)
                }}
              >
                {type}
              </h7>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
});
export default Headerframe;
