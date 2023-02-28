import { useState } from 'react';
import shortid from 'shortid';
import HistorySection from './components/history/history';
import InputBox from './components/inputBox/InputBox';
import OperationSection from './components/operationSection/OperationSection';


function App() {
  const initialVal = { a: 0, b: 0 }

  const [value, setValue] = useState({ ...initialVal })
  const [result, setResult] = useState(0)
  const [histories, setHistories] = useState([])

  const inputHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  const resetValue = () => {
    setValue({ ...initialVal });
    setResult(0)
  }

  const operationHandler = (operator) => {
    if (!value.a || !value.b) {
      alert("Invalid Input")
      return
    }

    let f = new Function(
      `operator`, `return ${value.a} ${operator} ${value.b}`
    )

    setResult(f(operator))


    const historyData = {
      id: shortid.generate(),
      input: { ...value },
      operator,
      result: eval(`${value.a} ${operator} ${value.b}`),
      time: new Date()
    }
    setHistories([historyData, ...histories])
  }


  const style = {
    width: "30%",
    backgroundColor: "#f3f1f1",
    padding: ".3rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center"
  }

  const inputStyle = { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }

  return (
    <div style={style}>

      <h1>Result:{result}</h1>

      <div style={inputStyle}>
        <InputBox inputHandler={inputHandler} value={value.a} placeholder="Input A" name="a" />
        <InputBox inputHandler={inputHandler} value={value.b} placeholder="Input B" name="b" />
      </div>

      <div>
        <OperationSection operationHandler={operationHandler} resetValue={resetValue} />
      </div>

      <div>
        <h3>History</h3>
        <hr />

        {
          histories.length <= 0 ? <li>No History Found</li> :
            histories.map(history => (
              <div key={history.id} >
                <HistorySection history={history} />
              </div>
            ))
        }


      </div>
    </div>
  )
}

export default App

