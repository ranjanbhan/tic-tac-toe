import React from 'react';
import { useState } from 'react';

const Calculator = () => {
    const [result,setResult] = useState(0)
    const [opn,setOpn] = useState(0)
    const [value1,setValue1] = useState(0)
    const [value2,setValue2] = useState(0)
    const [comp,setComp] = useState(true)
    const doCalculation = (val1,val2,op) => {
        if (op===4&&val2===0){
            return 'Invalid Operation';
        }
        let res = 0;
        if (op === 1) {
            res = val1 + val2;
        } else if (op === 2){
            res = val1 - val2;
        } else if (op === 3){
            res = val1 * val2;
        } else if (op === 4){
            res = val1 / val2;
        }
        return res;
    };

    const createNumbers = (num) => {
      if (opn===0){
        if (comp===true){
          setValue1(0)
          setValue2(0)
          setComp(false)
        }
        setValue1((value1*10)+num)
    } else {
        setValue2((value2*10)+num)
    }
    }

  return (
    <>
    <div>
      <div>
        <button onClick={()=>createNumbers(1)}>1</button>
        <button onClick={()=>createNumbers(2)}>2</button>
        <button onClick={()=>createNumbers(3)}>3</button>
        <button onClick={()=>{
        setOpn(1)
        }}> + </button>
      </div>


      <div>
        <button onClick={()=>createNumbers(4)}>4</button>
        <button onClick={()=>createNumbers(5)}>5</button>
        <button onClick={()=>createNumbers(6)}>6</button>
        <button onClick={()=>{
        setOpn(2)
        }}> - </button>
      </div>


      <div>
        <button onClick={()=>createNumbers(7)}>7</button>
        <button onClick={()=>createNumbers(8)}>8</button>
        <button onClick={()=>createNumbers(9)}>9</button>
        <button onClick={()=>{
        setOpn(3)
        }}> * </button>
      </div>


      <div>
        <button onClick={()=>{
        setValue1(0)
        setValue2(0)
        setOpn(0)
        setComp(true)
        setResult(0)
        }}>clear</button>
        <button onClick={()=>createNumbers(0)}>0</button>
        <button onClick={()=>{
        const res = doCalculation(value1,value2,opn)
        setResult(res)
        setComp(true)
        setOpn(0)
        }}> = </button>

        <button onClick={()=>{
        setOpn(4)
        }}> / </button>
      </div>

      <div>
        
      </div>

      <div>
        <button onClick={()=>{
        setValue1(result)
        setValue2(0)
        }}> result </button>
      </div>
    </div>

    <p>Value1 : {value1}</p>
    <p>Value2 : {value2}</p>
    <p>Result : {result}</p>
    </>
  )
}

export default Calculator
