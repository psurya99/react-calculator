import React, { useState }  from "react";
import "./index.css";

export default function Calculator() {

  const [ operator, setOperator ] = useState('+');
  const [ operand1, setOperand1 ] = useState('');
  const [ operand2, setOperand2 ] = useState('');
  const [ operationsCount, setOperationsCount ] = useState(0);
  const [ result, setResult ] = useState(undefined);

  const calculate = (operation) => {

    setOperationsCount(operationsCount+1);
    setOperator(operation);
    let res = undefined;
    if(operand1 && operand2){
      
      switch(operation){
        case '+':
          res = operand1 + operand2;
          break;
        case '-':
          res = operand1 - operand2;
          break;
        case '*':
          res = operand1 * operand2;
          break;
        case '/':
          res = operand1 / operand2;
          break;
        default:
          res = undefined;
      }
    }
    setResult(res);
  }

  const reset = () => {
    setOperator('+');
    setOperand1('');
    setOperand2('');
    setResult(undefined);
  }

  const handleOperand1 = (e) => {
    const value = e.target.value;
    if(!isNaN(value)){
      setOperand1(Number(value));
    }
  }

  const handleOperand2 = (e) => {
    const value = e.target.value;
    if(!isNaN(value)){
      setOperand2(Number(value));
    }
  }

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">{`Total operations performed: ${operationsCount}`}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                  name="input1" value={operand1} onChange={handleOperand1}/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operator}</label>
            <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                  placeholder="Eg: 2" value={operand2} onChange={handleOperand2}/>
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={() => {calculate('+')}}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={() => {calculate('-')}}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={() => {calculate('*')}}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={() => {calculate('/')}}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger" onClick={reset}>Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {
                !isNaN(result) && <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div>
              }
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}