import testIcon from "../assets/test-icon.png"
import newNoteIcon from "../assets/newnote-icon.png"
import kvizikLogo from "../assets/kvizik-logo.svg"
import arrowIcon from "../assets/arrow-icon.svg"
import ShadedButton from "./ShadedButton"
import { useState } from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const quizzes = [
    {
      title: "First quiz",
      id: "1",
    },
    {
      title: "Second quiz",
      id: "1",
    },
    {
      title: "Third quiz",
      id: "1",
    },
  ]
  const [quizzesExpanded, setQuizzesExpanded] = useState(true)

  return (
    <aside className="hidden md:block w-64 bg-layoutBG border rounded-xl border-layoutBorder pt-4 px-8">
      <h2 className="text-lg mb-4 gap-2 flex items-center -ml-4">
        <img src={kvizikLogo} alt="kvizik logo" className="h-8" />
        Kvizik
      </h2>
      <div className="-ml-4">
        <Link to="/">
          <ShadedButton className="flex items-center gap-2 bg-white pr-12">
            <img src={testIcon} alt="test icon" className="h-6" />
            Создать тест
          </ShadedButton>
        </Link>
      </div>
      <button
        className="flex items-center gap-2 bg-white mt-6 mb-6"
        onClick={() => {}}
      >
        <img src={newNoteIcon} alt="test icon" className="h-6" />
        Создать заметки
      </button>
      <div className="mt-12">
        <h3 className="font-bold mb-2 flex items-center gap-12">
          Мои квизы
          <div
            className="w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setQuizzesExpanded(!quizzesExpanded)}
          >
            <img
              src={arrowIcon}
              alt="arrow icon"
              className={`cursor-pointer transition-all duration-300 ${
                quizzesExpanded ? "-rotate-180" : ""
              }`}
            />
          </div>
        </h3>
        {quizzesExpanded && (
          <ul className="flex gap-2 flex-col">
            {quizzes.map((quiz) => (
              <Link key={quiz.title} to={`/quiz/${quiz.id}`}>
                <li>{quiz.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
