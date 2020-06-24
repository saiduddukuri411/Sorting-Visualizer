import React from "react";
import Header from "./pages/Header/frame";
import Bars from "./pages/Bars/frame";
const App = () => {
  const [type, setType] = React.useState("Bubble");
  const [array, setArray] = React.useState([]);
  const [colors, setColors] = React.useState([]);
  React.useEffect(() => {
    const SetHandler = (list, colors) => {
      setArray((prev) => [...list]);
      setColors((prev) => [...colors]);
    };
    const min = 15;
    const max = 500;
    const list = [];
    const colors = [];
    for (let i = 0; i < 50; i++) {
      const intNumber = Math.floor(Math.random() * (max - min)) + min;
      list.push(intNumber);
      colors.push("#4d4d4d");
    }
    SetHandler(list, colors);
  }, []);
  const arraySetter = React.useCallback(() => {
    const SetHandler = (list, colors) => {
      setArray((prev) => [...list]);
      setColors((prev) => [...colors]);
    };
    const min = 15;
    const max = 500;
    const list = [];
    const colors = [];
    for (let i = 0; i < 50; i++) {
      const intNumber = Math.floor(Math.random() * (max - min)) + min;
      list.push(intNumber);
      colors.push("#4d4d4d");
    }
    SetHandler(list, colors);
  }, []);
  return (
    <>
      <Header
        sortType={type}
        setType={setType}
        setter={arraySetter}
        colors={colors}
        arrays={array}
        arraySetter={setArray}
        colorSetter={setColors}
      />
      <Bars array={array} colors={colors} />
    </>
  );
};
export default App;
