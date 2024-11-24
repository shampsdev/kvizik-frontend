import kvizikLogo from "../assets/kvizik-logo.svg"
import burgerIcon from "../assets/burger-icon.svg"
import closeIcon from "../assets/close-icon.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import ShadedButton from "./ShadedButton"
import testIcon from "../assets/test-icon.png"
import newNoteIcon from "../assets/newnote-icon.png"

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <div className="md:hidden fixed z-50 top-0 h-16 left-0 right-0 flex items-center justify-between px-4 border-b border-layoutBorder bg-layoutBG">
      <div className="flex items-center gap-2 text-lg">
        <img src={kvizikLogo} alt="Logo" />
        Kvizik
      </div>
      <img
        src={isOpen ? closeIcon : burgerIcon}
        alt="Menu Toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      />
      <div
        className={`fixed inset-0 top-16 bg-white transition-opacity z-30 ${
          isOpen ? "opacity-1" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`flex flex-col items-end fixed z-40 top-16 right-0 h-full bg-white w-full max-w-sm shadow-lg transform transition-transform p-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <ShadedButton className="flex items-center gap-2 bg-white w-48">
              <img src={testIcon} alt="test icon" className="h-6" />
              Создать тест
            </ShadedButton>
          </Link>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <ShadedButton className="flex items-center gap-2 bg-white w-48">
              <img src={newNoteIcon} alt="test icon" className="h-6" />
              Создать заметки
            </ShadedButton>
          </Link>
        </div>
        <div className="mt-12 text-right">
          <h3 className="font-bold mb-2 flex items-center gap-12">Мои квизы</h3>
          <ul className="flex gap-2 flex-col">
            {quizzes.map((quiz) => (
              <Link
                key={quiz.title}
                to={`/quiz/${quiz.id}`}
                onClick={() => setIsOpen(false)}
              >
                <li>{quiz.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
