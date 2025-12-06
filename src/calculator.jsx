import { useState } from "react";
import "./linksfilestyle.css";
let arr = [];
let temp = [];
let str;
function Calculatorproject() {
  let [input1, setInput1] = useState(" ");

  function handlecalculator(value) {
    if (
      (arr[arr.length - 1] == "+" ||
        arr[arr.length - 1] == "-" ||
        arr[arr.length - 1] == "*" ||
        arr[arr.length - 1] == "/" ||
        arr[arr.length - 1] == "%") &&
      (value == "+" ||
        value == "-" ||
        value == "*" ||
        value == "/" ||
        value == "%")
    ) {
    } else {
      arr = [...arr, value];
      temp = [...arr];
      str = temp.join("");
      console.log(temp);
      console.log(str);
      setInput1(str);
    }
    //console.log(arr);
  }
  function calculateresult() {
    let result = eval(arr.join(""));
    str = result;
    setInput1(str);
    console.log(result);
    arr = [];
    temp = [];
    str = "";
  }
  function cleararray() {
    arr = [];
    temp = [];
    str = "";
    setInput1("");
  }
  function removeoneelement() {
    arr.pop();
    temp = [...arr];
    str = temp.join("");
    setInput1(str);
  }
  return (
    <div className="mainbody">
      <div className="calculatecontainer">
        <div id="valuediv">
          <div id="answerdiv">{input1}</div>
        </div>
        <div id="acequal" onClick={cleararray}>
          AC
        </div>
        <div className="buttons" onClick={removeoneelement}>
          DEL
        </div>
        <div
          className="buttons"
          onClick={() => {
            handlecalculator("/");
          }}
        >
          /
        </div>
        <div
          className="buttons"
          value="1"
          onClick={() => handlecalculator("1")}
        >
          1
        </div>
        <div
          className="buttons"
          value="2"
          onClick={() => handlecalculator("2")}
        >
          2
        </div>
        <div
          className="buttons"
          value="3"
          onClick={() => handlecalculator("3")}
        >
          3
        </div>
        <div
          className="buttons"
          value="+"
          onClick={() => handlecalculator("+")}
        >
          +
        </div>
        <div
          className="buttons"
          value="4"
          onClick={() => handlecalculator("4")}
        >
          4
        </div>
        <div
          className="buttons"
          value="5"
          onClick={() => handlecalculator("5")}
        >
          5
        </div>
        <div
          className="buttons"
          value="6"
          onClick={() => handlecalculator("6")}
        >
          6
        </div>
        <div
          className="buttons"
          value="-"
          onClick={() => handlecalculator("-")}
        >
          -
        </div>
        <div
          className="buttons"
          value="7"
          onClick={() => handlecalculator("7")}
        >
          7
        </div>
        <div
          className="buttons"
          value="8"
          onClick={() => handlecalculator("8")}
        >
          8
        </div>
        <div
          className="buttons"
          value="9"
          onClick={() => handlecalculator("9")}
        >
          9
        </div>
        <div
          className="buttons"
          value="*"
          onClick={() => handlecalculator("*")}
        >
          *
        </div>
        <div
          className="buttons"
          value="."
          onClick={() => handlecalculator(".")}
        >
          .
        </div>
        <div className="buttons" value="0" onClick={() => handlecalculator(0)}>
          0
        </div>
        <div id="acequal" onClick={calculateresult}>
          =
        </div>
      </div>
    </div>
  );
}
export default Calculatorproject;
