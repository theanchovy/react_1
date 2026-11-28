import { useState } from 'react';
import './Calculator.css';

function Factorial() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const n = parseInt(number, 10);
        if (isNaN(n) || n < 0) {
            setResult('Введите неотрицательное целое число');
            return;
        }
        let f = 1;
        for (let i = 2; i <= n; i++) {
            f *= i;
        }
        setResult(f);
    };

    return (
        <div className="calculator">
            <h2>Факториал</h2>
            <input
                type="number"
                min="0"
                value={number}
                onChange={e => setNumber(e.target.value)}
                placeholder="Введите число"
            />
            <button onClick={calculate}>Вычислить</button>
            {result !== null && <p>Результат: {result}</p>}
        </div>
    );
}

export default Factorial;