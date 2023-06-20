import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function SingleQuestion({ title, info, id, toggleQuestion, selected }) {
  const isSelect = selected === id;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="btn" onClick={() => toggleQuestion(id)}>
          {isSelect ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isSelect && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
