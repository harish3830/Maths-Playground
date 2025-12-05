import { useEffect, useState } from "react";

export default function TestQuiz() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);
        setQuestions(selected);
      });
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleAnswer = (qId, option, correct) => {
    if (answered[qId] !== undefined) return;

    setAnswered((prev) => ({ ...prev, [qId]: option }));

    if (option === correct) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Math Quiz</h2>
      {questions.map((q, idx) => (
        <div key={q.id} className="p-3 border-b">
          <p className="font-medium">
            {idx + 1}. {q.question}
          </p>
          <ul>
            {q.options.map((opt, i) => {
              const isSelected = answered[q.id] === opt;
              const isCorrect = opt === q.answer;

              return (
                <li key={i} className="my-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      disabled={answered[q.id] !== undefined}
                      checked={isSelected}
                      onChange={() => handleAnswer(q.id, opt, q.answer)}
                    />
                    <span
                      className={
                        isSelected
                          ? isCorrect
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                          : ""
                      }
                    >
                      {opt}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div>
        <button
          onClick={handleSubmit}
          disabled={Object.keys(answered).length !== questions.length} // 🔑
          className={`w-full py-2 rounded-lg mt-4 
    ${
      Object.keys(answered).length === questions.length
        ? "bg-indigo-500 text-white hover:bg-indigo-600"
        : "bg-gray-300 text-gray-600 cursor-not-allowed"
    }`}
        >
          Submit
        </button>

        {submitted && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow text-center">
            <h2 className="text-lg font-bold">Your Score</h2>
            <p className="text-2xl">
              {score} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
