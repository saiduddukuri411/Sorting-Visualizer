import React from "react";
import "./styles/frame.scss";
import { FaPlay } from "react-icons/fa";
import { AiOutlineReload, AiFillCaretDown } from "react-icons/ai";
import { algo } from "./components/algos";
const types = ["Bubble", "Merge", "Quick", "Insertion"];

const Headerframe = React.memo(
  ({ sortType, setType, setter, colors, arrays, arraySetter, colorSetter }) => {
    const [icon, setIcon] = React.useState(true);
    console.log("icon", icon);
    const run = () => {
      setIcon((prev) => false);
      algo(
        colorSetter,
        colors,
        setTimer,
        sortType,
        arraySetter,
        arrays,
        setIcon
      );
    };
    const [count, setCount] = React.useState(0);
    const [timer, setTimer] = React.useState([]);

    const reloader = () => {
      timer.map((time) => {
        clearTimeout(time);
      });
      setter();
    };
    console.log("header",count);
    return (
      <header className="headerContainer">
        <h1>
          <span className="left">SORT</span> IT
        </h1>
        <div className="headerIcons">
          {icon ? <FaPlay className="icons" onClick={run} /> : null}
          {icon ? (
            <AiOutlineReload className="icons" onClick={reloader} />
          ) : null}
        </div>
        <div
          className="headerDropdown"
          onClick={() => {
            if((count-1)%3===0){
              setCount((prev) => 0);
            }else{
              setCount((prev) => prev + 1);
            }
            
          }}
        >
          <h2>{`${sortType} Sort`}</h2>
          <AiFillCaretDown className="downArrow" />
          {count % 3 !== 0 ? (
            <div className="content">
              {types.map((type) => (
                <h7
                  key={type}
                  onClick={() => {
                    setType((prev) => type);
                    setCount((prev) => prev + 1);
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
  }
);
export default Headerframe;
