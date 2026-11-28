import { useState } from 'react';
import './Calculator.css';

function Fibonacci() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState([]);

    const calculate = () => {
        const n = parseInt(number, 10);
        if (isNaN(n) || n < 1) {
            setResult(['Введите целое число больше 0']);
            return;
        }
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        setResult(fib.slice(0, n));
    };

    return (
        <div className="calculator">
            <h2>Числа Фибоначчи</h2>
            <input
                type="number"
                min="1"
                value={number}
                onChange={e => setNumber(e.target.value)}
                placeholder="Сколько чисел вывести"
            />
            <button onClick={calculate}>Вычислить</button>
            {result.length > 0 && <p>{result.join(', ')}</p>}
        </div>
    );
}

export default Fibonacci;