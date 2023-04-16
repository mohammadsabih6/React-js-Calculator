import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const[insert,setinsert]=useState([]);
    function inputhandler(value){
        setinsert((pre_value)=>pre_value+value)
    }
    function handleClear(){
        setinsert("")
    }
    function percentage(){
        setinsert((insert/100)*10)
    }
    function removehandler(){
        setinsert(insert.slice(0,-1));
    }
    function handleResult(){
        if(handleResult==="+"){
            // eslint-disable-next-line no-eval
            setinsert((pre_value)=>eval(insert)+pre_value);
        }
        else if(handleResult==="-"){
            // eslint-disable-next-line no-eval
            setinsert((pre_value)=>eval(insert)-pre_value);
        }
        else if(handleResult==="/"){
            // eslint-disable-next-line no-eval
            setinsert((pre_value)=>eval(insert)/pre_value);
        }
        else if(handleResult==="*"){
            // eslint-disable-next-line no-eval
            setinsert((pre_value)=>eval(insert)*pre_value);
        }
        // eslint-disable-next-line no-eval
        setinsert(eval(insert));

    }
  return (
    <>
    <h1>Xloop Calculator</h1>
    <div className="calculator">
        <input type="text" value={insert} />
        <div className="numbers">
            <button onClick={handleClear} >AC</button>
            <button onClick={removehandler}>C</button>
            <button onClick={() => percentage()}>%</button>
            <button onClick={() => inputhandler("/")}>/</button>
            <button onClick={() => inputhandler("7")}>7</button>
            <button onClick={() => inputhandler("8")}>8</button>
            <button onClick={() => inputhandler("9")}>9</button>
            <button onClick={() => inputhandler("*")}>x</button>
            <button onClick={() => inputhandler("4")}>4</button>
            <button onClick={() => inputhandler("5")}>5</button>
            <button onClick={() => inputhandler("6")}>6</button>
            <button onClick={() => inputhandler("-")}>-</button>
            <button onClick={() => inputhandler("1")}>1</button>
            <button onClick={() => inputhandler("2")}>2</button>
            <button onClick={() => inputhandler("3")}>3</button>
            <button onClick={() => inputhandler("+")}>+</button>
            <button onClick={() => inputhandler("0")}>0</button>
            <button onClick={() => inputhandler(".")}>.</button>
            <button id="equal" onClick={() => handleResult()}>=</button>
        </div>
    </div>
    </>
  )
}
export default Calculator;