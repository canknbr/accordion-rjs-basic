import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";
const App = () => {
  const [questions, setQuestions] = useState(data);
  const [selected, setSelected] = useState(null);
  const toggleQuestion = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <main>
      <Questions
        questions={questions}
        toggleQuestion={toggleQuestion}
        selected={selected}
      />
    </main>
  );
};
export default App;
