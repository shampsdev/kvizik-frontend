import "./App.css"
import UploadSection from "./components/UploadSection"
import QuizDisplay from "./components/QuizDisplay"
import Sidebar from "./components/Sidebar"
import MobileHeader from "./components/MobileHeader"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <MobileHeader />
      <div className="flex h-screen bg-layoutBG md:bg-backgroundGray md:p-4 pb-0 md:pb-4 gap-2 pt-16 md:pt-2">
        <Sidebar />
        <main className="flex-1 bg-layoutBG md:border md:rounded-xl border-layoutBorder pt-10 mb:pt-0 md:p-4 flex flex-col items-center overflow-y-auto px-4 md:px-0 pb-8 md:pb-0">
          <Routes>
            <Route path="/" element={<UploadSection />} />
            <Route path="/quiz/:quiz_id" element={<QuizDisplay />} />{" "}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
