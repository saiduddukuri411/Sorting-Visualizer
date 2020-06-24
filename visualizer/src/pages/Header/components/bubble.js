export const bubble = (
  colorSetter,
  colors,
  setTimer,
  type,
  arraySetter,
  arrays,
  setIcon
) => {
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      const timer1 = setTimeout(() => {
        colors[i] = "#f15025";
        colors[j] = "#f15025";
        colorSetter((prev) => [...colors]);
      }, 500 + i * 150);
      const timer2 = setTimeout(() => {
        if (arrays[i] > arrays[j]) {
          let temp = arrays[j];
          arrays[j] = arrays[i];
          arrays[i] = temp;
          arraySetter((prev) => [...arrays]);
        }
      }, 500 + i * 170);
      const timer3 = setTimeout(() => {
        colors[i] = "#4d4d4d";
        colors[j] = "#4d4d4d";
        colorSetter((prev) => [...colors]);
      }, 500 + i * 190);
      setTimer((prev) => [...prev, timer1,timer2,timer3]);
    }
    if(i===colors.length-1){
        setTimeout(()=>{
         setIcon(true)
        },500+i*175)
    }

  }
  
};

// const timer1 = setTimeout(() => {
//     console.log(i);
//     colors[i] = "#f15025";
//     colorSetter((prev) => [...colors]);
//   }, 500 + i * 150);

//   const timer2 = setTimeout(() => {
//     colors[i] = "#4d4d4d";
//     arraySetter((prev) => [...colors]);
//   }, 500 + i * 160);
//   setTimer((prev) => [...prev, timer1, timer2]);
