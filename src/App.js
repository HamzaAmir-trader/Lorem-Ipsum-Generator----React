import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3></h3>
      <form className="lorem-form" onSubmit={handleSubmit} action="">
        <label htmlFor="amount">
          Paragraphs:
      </label>
        <input type="number" name="amount" value={count} onChange={(e) => setCount(e.target.value)} id="amount" />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })}
      </article>
    </section>
  )
}

export default App;
