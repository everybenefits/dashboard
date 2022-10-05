export default function Pagination({
  total,
  start,
  end,
  fetchMore,
  fetchLess,
  usersShown,
}) {
  const disabledNext = usersShown < 10
  const disabledPrev = start === 1
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{start}</span> to{' '}
          <span className="font-medium">{end}</span> of{' '}
          <span className="font-medium">{total}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          disabled={disabledPrev}
          onClick={fetchLess}
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            disabledPrev ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Previous
        </button>

        <button
          disabled={disabledNext}
          onClick={fetchMore}
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            disabledNext ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Next
        </button>
      </div>
    </nav>
  )
}
