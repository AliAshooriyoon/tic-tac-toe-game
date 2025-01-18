let normalInp;
let usr1 = [];
let usr2 = [];
// let counter = 0;
let calculateNums = [];
const calculate = (inp) => {
  // console.log(`Das ist : ${inp}`);
  console.log("Sieh mal Input");
  console.log(inp);
  normalInp = inp.split(" ");
  console.log(normalInp);
  normalInp[0] == "User1" ? usr1.push(normalInp) : usr2.push(normalInp);
  if (usr1.length >= 3) {
    usr1.some((i) => {
      if (true) {
        console.log(i[1]);
        calculateNums.push(i[1]);
        console.log(calculateNums.join(""));
        console.log(typeof calculateNums);
        console.log(calculateNums);
        let has1 = calculateNums.includes("1");
        let has2 = calculateNums.includes("2");
        let has3 = calculateNums.includes("3");
        let has4 = calculateNums.includes("4");
        let has5 = calculateNums.includes("5");
        let has6 = calculateNums.includes("6");
        let has7 = calculateNums.includes("7");
        let has8 = calculateNums.includes("8");
        let has9 = calculateNums.includes("9");
        has1 && has2 && has3 ? alert(`Yaaaaa ${i[0]}`) && true : false;
        has4 && has5 && has6 ? alert(`Yaaaaa ${i[0]}`) && true : false;
        has7 && has8 && has9 ? alert(`Yaaaaa ${i[0]}`) && true : false;
        has1 && has4 && has7 ? alert(`Yaaaaa ${i[0]}`) && true : false;
        has2 && has5 && has8 ? alert(`Yaaaaa ${i[0]}`) && true : false;
        has3 && has6 && has9 ? alert(`Yaaaaa ${i[0]}`) && true : false;
        has1 && has5 && has9 ? alert(`Yaaaaa ${i[0]}`) && true : false;
        has3 && has5 && has7 ? alert(`Yaaaaa ${i[0]}`) && true : false;
      }
    });
  }
  console.log(usr1);
  console.log(usr2);
};
export default calculate;
