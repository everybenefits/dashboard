export function MeetingsComponent() {
  return (
    <>
      <main className="">
        <h2 className="text-xl">List of Meetings</h2>
        <p className="text-sm">
          There are no meetings available yet. If you think it is a mistake,{' '}
          <a
            className="text-green-700 font-semibold hover:underline"
            href="mailto:info@everybenefits.us"
          >
            contact an administrator
          </a>
          .
        </p>
      </main>
    </>
  )
}
