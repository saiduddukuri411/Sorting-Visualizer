import {bubble} from './bubble';

export const algo = (colorSetter, colors, setTimer,type,arraySetter,arrays,setIcon) => {
   if(type==="Bubble"){
      bubble(colorSetter, colors, setTimer,type,arraySetter,arrays,setIcon);
   }
//   for (let i = 0; i < colors.length; i++) {
//     const timer1 = setTimeout(() => {
//       console.log(i);
//       colors[i] = "#f15025";
//       setter((prev) => [...colors]);
//     }, 500 + i * 150);

//     const timer2 = setTimeout(() => {
//       colors[i] = "#4d4d4d";
//       setter((prev) => [...colors]);
//     }, 500 + i * 160);
//     setTimer((prev) => [...prev, timer1,timer2]);
//   }
};
