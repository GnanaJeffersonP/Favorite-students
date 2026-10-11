import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { StudentProvider } from './components/StudentContext.jsx'
import StudentList from './components/StudentList.jsx'
import FavouriteStudents from './components/FavouriteStudents.jsx'


function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-100">
          <nav className="flex items-center justify-between bg-slate-900 px-8 py-5 text-white">
            <h1 className="text-2xl font-bold">
              Favourite Students
            </h1>

            <div className="flex gap-6">
              <Link to="/" className="hover:text-cyan-300">
                Student List
              </Link>

              <Link to="/favourites" className="hover:text-cyan-300">
                Favourites
              </Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route
              path="/favourites"
              element={<FavouriteStudents />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </StudentProvider>
  )
}

export default App