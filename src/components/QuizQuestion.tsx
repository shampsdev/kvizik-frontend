import { cn } from "@/lib/utils"

export type Question = {
  text: string
  answers: { text: string; id: string }[]
}

export default function QuizQuestion({
  question,
  selectedOptionId,
  setSelectedOptionId,
  correctAnswerId,
}: {
  question: Question
  selectedOptionId: string | null
  setSelectedOptionId: (id: string) => void
  correctAnswerId: string | null
}) {
  return (
    <div className="border-[1.5px] border-black rounded-xl p-4 pb-6 mb-4 mt-8">
      <h3 className="mb-2">Вопрос 1</h3>
      <p>{question.text}</p>
      <ul className="flex flex-col gap-3 mt-2">
        {question.answers.map((option, index) => (
          <div className="relative" key={option.id}>
            <div
              onClick={() =>
                correctAnswerId == null && setSelectedOptionId(option.id)
              }
              className={cn(
                "relative z-10 flex gap-4 border-[1.5px] bg-white transiotion-all duration-200 border-black rounded-xl p-4 cursor-pointer",
                correctAnswerId == null &&
                  option.id == selectedOptionId &&
                  " bg-purple",
                correctAnswerId == option.id && " bg-answerGreen",
                correctAnswerId &&
                  correctAnswerId != option.id &&
                  option.id == selectedOptionId &&
                  " bg-answerRed"
              )}
            >
              <span className="font-bold">{["A", "B", "C", "D"][index]}.</span>
              <button>{option.text}</button>
            </div>
            {correctAnswerId == null && option.id == selectedOptionId && (
              <div className="border-[1.5px] border-black bg-black rounded-xl absolute top-1 left-1 w-full h-full"></div>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}
