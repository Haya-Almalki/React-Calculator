
import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const add = (num) => {
    setResult(parseInt(number1) + parseInt(number2));
  }

  const sub = (num) => {
    setResult(parseInt(number1) - parseInt(number2));
  }

  const multi = (num) => {
    setResult(parseInt(number1) * parseInt(number2));
  }

  const div = (number) => {
    setResult(parseInt(number1) / parseInt(number2));
  }

  const reminder = (num) => {
    setResult(parseInt(number1) % parseInt(number2));
  }

  return (
    <div className="App">
      <div className="container py-3 h-80">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-4 text-center">

                <div className="mb-md-4 mt-md-4 pb-3">

                  <h2 className="fw-bold mb-5 ">Calculator</h2><p></p>

                  <div className="form-outline form-white mb-3">
                    <input type="number" value={number1} onChange={(num) => setNumber1(num.target.value)} id="num1" className="form-control form-control-lg" placeholder="First Number" />

                  </div>

                  <div className="form-outline form-white mb-3">
                    <input type="number" value={number2} onChange={(num) => setNumber2(num.target.value)} id="num2" className="form-control form-control-lg" placeholder="Second Number" />
                  </div>

                  <button onClick={add} className="btn btn-outline-light mx-1 px-3" type="submit">+</button>
                  <button onClick={sub} className="btn btn-outline-light mx-1  px-3" type="submit">-</button>
                  <button onClick={multi} className="btn btn-outline-light mx-1 px-3" type="submit">*</button>
                  <button onClick={div} className="btn btn-outline-light mx-1  px-3" type="submit">/</button>
                  <button onClick={reminder} className="btn btn-outline-light mx-1  px-3" type="submit">%</button>
                  <h3 className="fw-bold mt-5 "> result: {result}</h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
