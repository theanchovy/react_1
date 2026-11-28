import { useState } from 'react';
import './Calculator.css';

function Power() {
    const [base, setBase] = useState('');
    const [exponent, setExponent] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const b = parseFloat(base);
        const e = parseInt(exponent, 10);
        if (isNaN(b) || isNaN(e)) {
            setResult('Введите числа');
            return;
        }
        setResult(Math.pow(b, e));
    };

    return (
        <div className="calculator">
            <h2>Возведение в степень</h2>
            <input
                type="number"
                value={base}
                onChange={e => setBase(e.target.value)}
                placeholder="Основание"
            />
            <input
                type="number"
                value={exponent}
                onChange={e => setExponent(e.target.value)}
                placeholder="Показатель степени"
            />
            <button onClick={calculate}>Вычислить</button>
            {result !== null && <p>Результат: {result}</p>}
        </div>
    );
}

export default Power;