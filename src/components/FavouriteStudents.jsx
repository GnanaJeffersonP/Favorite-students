import { useContext } from 'react'
import { StudentContext } from './StudentContext'


function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext)

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-800">
        Favourite Students
      </h1>

      <p className="mt-2 text-slate-500">
        Your selected favourite students.
      </p>

      {favourites.length === 0 ? (
        <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="text-5xl">♡</div>

          <h2 className="mt-4 text-xl font-semibold text-slate-700">
            No favourite students added yet
          </h2>

          <p className="mt-2 text-slate-500">
            Go to the Student List and add your favourites.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favourites.map((student) => (
            <div
              key={student.id}
              className="rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-lg font-bold text-pink-700">
                {student.name.charAt(0)}
              </div>

              <h2 className="text-xl font-semibold text-slate-800">
                {student.name}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Roll Number: {student.id}
              </p>

              <button
                onClick={() => removeFavourite(student.id)}
                className="mt-5 w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Remove Favourite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavouriteStudents