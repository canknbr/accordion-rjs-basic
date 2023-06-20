import React from "react";
import SingleQuestion from "./SingleQuestion";

function Questions({ questions, toggleQuestion, selected }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            selected={selected}
          />
        );
      })}
    </section>
  );
}

export default Questions;
