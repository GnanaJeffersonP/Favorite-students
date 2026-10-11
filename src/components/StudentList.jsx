import { useContext } from 'react'
import { StudentContext } from './StudentContext'

const students = [
  { id: 101, name: 'Arun Kumar' },
  { id: 102, name: 'Priya Sharma' },
  { id: 103, name: 'Rahul Raj' },
  { id: 104, name: 'Divya S' },
  { id: 105, name: 'Karthik M' },
]

function StudentList() {
  const { favourites, addFavourite } = useContext(StudentContext)

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-800">
        Student List
      </h1>

      <p className="mt-2 text-slate-500">
        Select your favourite students.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          )

          return (
            <div
              key={student.id}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                {student.name.charAt(0)}
              </div>

              <h2 className="text-xl font-semibold text-slate-800">
                {student.name}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Roll Number: {student.id}
              </p>

              <button
                onClick={() => addFavourite(student)}
                disabled={isFavourite}
                className={`mt-5 w-full rounded-lg px-4 py-3 font-semibold text-white transition ${
                  isFavourite
                    ? 'cursor-not-allowed bg-slate-400'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isFavourite ? 'Added to Favourite ✓' : 'Add to Favourite'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StudentList