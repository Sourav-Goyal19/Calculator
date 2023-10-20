import './style/App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header'
import { Keypad } from './components/Keypad';
import { useState } from 'react';
import { useEffect } from 'react';

const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109, 110
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["-", "+", "*", "/"];

function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('calculator-app-mode')) || false)
  const [expression, setExpression] = useState("0")
  const [result, setResult] = useState("0")
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('calculator-history-mode')) || []);

  function handleKeypress(keyCode, key) {
    if (!usedKeyCodes.includes(keyCode)) return;
    if (expression === "" && key === "0") return;

    if (key === '.') {
      const lastChar = expression.charAt(expression.length - 1);
      if (lastChar === '.') return;
      setExpression(expression + key);
    }

    if (numbers.includes(key)) {
      if (expression.charAt(0) === '0' && expression.length === 1) {
        setExpression(key);
        handleResult(expression);
      } else {
        setExpression(expression + key);
        handleResult(expression + key);
      }
    }

    if (operators.includes(key)) {
      const lastChar = expression.charAt(expression.length - 1);
      if (operators.includes(lastChar)) {
        const newExpression = expression.substring(0, expression.length - 1);
        setExpression(newExpression + key);
      } else {
        setExpression(expression + key);
      }
    }

    if (keyCode === 8) {
      if (!expression) return;
      const newExpression = expression.substring(0, expression.length - 1);
      setExpression(newExpression);
      handleResult(newExpression)
    }

    if (keyCode === 13 || keyCode === 187) {
      const lastChar = expression.charAt(expression.length - 1);
      if (operators.includes(lastChar)) return;
      // handleResult(expression);
      const tempHistory = [...history];
      if (tempHistory.length > 20) tempHistory.shift();
      tempHistory.push(expression);
      setHistory(tempHistory);
      console.log("Enter key pressed");
    }
  }

  const handleResult = (exp) => {
    if (!exp) {
      setResult("");
      return;
    }
    const result = eval(exp);
    setResult(result.toFixed(3))
  }
  useEffect(() => {
    localStorage.setItem("calculator-app-mode", JSON.stringify(isDark));
  }, [isDark])
  useEffect(() => {
    localStorage.setItem("calculator-history-mode", JSON.stringify(history));
  }, [history])
  return (
    <div className='app' tabIndex={0} onKeyDown={(event) => { handleKeypress(event.keyCode, event.key) }} data-theme={isDark ? "dark" : ''}>
      <div className="calculator">
        <Navbar dark={isDark} setDark={setIsDark} />
        <Header expression={expression} result={result} history={history} />
        <Keypad handleKeypress={handleKeypress} />
      </div>
    </div>
  )
}

export default App
