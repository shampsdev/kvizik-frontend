import { useEffect, useState } from "react"
import ShadedButton from "./ShadedButton"
import { useParams } from "react-router-dom"
import QuizQuestion from "./QuizQuestion"
import { fetchTestResult, getQuiz } from "@/lib/api"

type SelectedOptions = {
  [questionId: string]: string | null
}
type Result = {
  correct_answers: number
  total_questions: number
}

const QuizDisplay = () => {
  const { quiz_id } = useParams()

  const [answers, setAnswers] = useState<string[] | null>(null)
  const [result, setResult] = useState<Result | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  async function checkAnswers() {
    const answers = quiz.questions.map((question: any) => {
      return {
        question_id: question.id,
        answer_id: selectedOptions[question.id],
      }
    })
    const { correct_answers, total_questions } = await fetchTestResult(
      quiz_id!,
      answers
    )

    setResult({
      correct_answers,
      total_questions,
    })
  }
  function restartQuiz() {
    setAnswers(null)
    setSelectedOptions({})
    setResult(null)
  }

  const [quiz, setQuiz] = useState<any>(null)

  useEffect(() => {
    getQuiz(quiz_id!).then((quiz) => setQuiz(quiz))
  }, [])

  return (
    <div className="pt-4 w-full max-w-[840px]">
      {/* <h2 className="text-lg font-bold mb-4">
        {result ? "Ваш результат:" : quiz.title}
      </h2> */}
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
          {/* <p className="mb-4">{quiz.description}</p> */}
          <ShadedButton className="bg-blue md:px-6">Поделиться</ShadedButton>
        </>
      )}

      {!result &&
        quiz?.questions.map((question: any, index: number) => (
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
        <ShadedButton className="bg-blue md:px-6" onClick={checkAnswers}>
          Проверить ответы
        </ShadedButton>
      )}
    </div>
  )
}

export default QuizDisplay
