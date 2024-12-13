import { useState } from "react"
import ShadedButton from "./ShadedButton"
import { useNavigate } from "react-router-dom"
import uploadIcon from "../assets/upload-icon.svg"
import { generateQuiz } from "@/lib/api"

const UploadSection = () => {
  const [activeTab, setActiveTab] = useState("PDF")
  const navigate = useNavigate()
  const [text, setText] = useState("")

  const handleGenerate = async () => {
    const { test_id } = await generateQuiz(text)
    navigate(`/quiz/${test_id}`)
  }

  return (
    <div className="flex pt-4 pb-8 px-4 md:px-6  border rounded-xl border-black w-full max-w-[840px] flex-col gap-4 md:gap-8">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1 flex items-center">
          {activeTab === "PDF" ? (
            <ShadedButton className="bg-purple w-full text-nowrap">
              PDF-формат
            </ShadedButton>
          ) : (
            <button
              className="text-center w-full py-3 text-nowrap relative top-0 hover:-top-1 transition-all duration-300"
              onClick={() => setActiveTab("PDF")}
            >
              PDF-формат
            </button>
          )}
        </div>
        <div className="flex-1 flex items-start">
          {activeTab === "Web" ? (
            <ShadedButton className="bg-purple w-full text-nowrap">
              Веб-сайт
            </ShadedButton>
          ) : (
            <button
              className="text-center w-full py-3 text-nowrap relative top-0 hover:-top-1 transition-all duration-300"
              onClick={() => setActiveTab("Web")}
            >
              Веб-сайт
            </button>
          )}
        </div>
        <div className="flex-1 flex items-center">
          {activeTab === "Text" ? (
            <ShadedButton className="bg-purple w-full text-nowrap">
              Ввести текст
            </ShadedButton>
          ) : (
            <button
              className="text-center w-full py-3 text-nowrap relative top-0 hover:-top-1 transition-all duration-300"
              onClick={() => setActiveTab("Text")}
            >
              Ввести текст
            </button>
          )}
        </div>
      </div>
      <p>
        {activeTab === "PDF"
          ? "Загрузите любые учебные материалы, такие как конспекты лекций, главы учебников, статьи или исследовательские работы."
          : activeTab === "Web"
          ? "Загружайте любые веб-сайты, такие как заметки, статьи или блоги."
          : "Отправьте любой текст, например лекцию или статью"}
      </p>

      <div className="relative">
        <div className="relative z-10 rounded-xl border border-black bg-white p-4">
          {activeTab == "PDF" ? (
            <div className="flex flex-col items-center gap-4 py-4">
              <img src={uploadIcon} alt="upload icon" className="h-12" />
              <p className="text-center">
                Перетащите файл PDF сюда или нажмите, чтобы выбрать файл
              </p>
              <input type="file" className="hidden" />
            </div>
          ) : activeTab == "Web" ? (
            <input
              type="text"
              placeholder="Добавить URL сайта"
              className="placeholder-textGray"
            />
          ) : (
            <textarea
              placeholder="Введите текст"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-auto"
            />
          )}
        </div>
        <div className="rounded-xl w-full h-full absolute top-1 left-1 bg-black border"></div>
      </div>
      <ShadedButton className="bg-blue" onClick={handleGenerate}>
        Сгенерировать
      </ShadedButton>
    </div>
  )
}

export default UploadSection
