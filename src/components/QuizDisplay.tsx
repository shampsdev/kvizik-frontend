import { useState } from "react"
import ShadedButton from "./ShadedButton"
import { useParams } from "react-router-dom"
import QuizQuestion from "./QuizQuestion"

type SelectedOptions = {
  [questionId: string]: string | null
}
type Result = {
  correct_answers: number
  total_questions: number
}

const QuizDisplay = () => {
  // @ts-ignore
  const { quiz_id } = useParams()

  const [answers, setAnswers] = useState<string[] | null>(null)
  const [result, setResult] = useState<Result | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  function getAnswers() {
    setAnswers(["123-123-123", "234", "51", "222"])
    setResult({
      correct_answers: 2,
      total_questions: 3,
    })
  }
  function restartQuiz() {
    setAnswers(null)
    setSelectedOptions({})
    setResult(null)
  }

  const quiz = {
    title: "Название теста",
    description:
      "Описание Explore fascinating topics: tardigrade resilience, Chicago River ecology, Burmese python adaptations, olfactory system breathing, and the elusive Ivory-billed Woodpecker. Discover nature's wonders and scientific marvels.",
    questions: [
      {
        id: "1",
        questionText: "What unique protein do tardigrades produce?",
        options: [
          { text: "Dsup", id: "123-123-123" },
          { text: "Hsp70", id: "234" },
          { text: "Rad51", id: "51" },
          { text: "p53", id: "222" },
        ],
      },
      {
        id: "2",
        questionText: "What unique protein do tardigrades produce?",
        options: [
          { text: "Dsup", id: "123-123-123" },
          { text: "Hsp70", id: "234" },
          { text: "Rad51", id: "51" },
          { text: "p53", id: "222" },
        ],
      },
    ],
  }

  return (
    <div className="pt-4 w-full max-w-[840px]">
      <h2 className="text-lg font-bold mb-4">
        {result ? "Ваш результат:" : quiz.title}
      </h2>
      {result ? (
        <>
          <p className="mb-4 p-4 border rounded-xl">
            Вы правильно ответили на {result.correct_answers} из{" "}
            {result.total_questions} вопросов
          </p>
          <ShadedButton className="bg-blue md:px-6" onClick={restartQuiz}>
            Пройти заново
          </ShadedButton>
        </>
      ) : (
        <>
          <p className="mb-4">{quiz.description}</p>
          <ShadedButton className="bg-blue md:px-6">Поделиться</ShadedButton>
        </>
      )}

      {quiz.questions.map((question, index) => (
        <QuizQuestion
          key={question.id}
          question={question}
          selectedOptionId={selectedOptions[question.id]}
          setSelectedOptionId={(id) =>
            setSelectedOptions((prev) => ({ ...prev, [question.id]: id }))
          }
          correctAnswerId={answers ? answers[index] : null}
        />
      ))}

      {result == null && (
        <ShadedButton className="bg-blue md:px-6" onClick={getAnswers}>
          Проверить ответы
        </ShadedButton>
      )}
    </div>
  )
}

export default QuizDisplay
