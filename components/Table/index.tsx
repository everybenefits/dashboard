import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { firestore } from '@firebase/index'
import {
  query,
  orderBy,
  limit,
  getDocs,
  collection,
  startAfter,
} from 'firebase/firestore'
import { useGetUsers } from '@hooks/useGetUsers'

// Components
const Link = dynamic(() => import('next/link'), { ssr: false })
const Pagination = dynamic(() => import('components/Pagination'), {
  ssr: false,
})

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Table() {
  // Reference
  const checkbox = useRef() as React.MutableRefObject<HTMLInputElement>
  const total = useGetUsers().length

  // State
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState([])
  const [users, setUsers] = useState([])
  const [lastDoc, setLastDoc] = useState(null)
  const [offset, setOffset] = useState(0)
  const [end, setEnd] = useState(10)

  // Effects
  useLayoutEffect(() => {
    const isIndeterminate =
      selectedUsers.length > 0 && selectedUsers.length < users.length
    setChecked(selectedUsers.length === users.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedUsers])

  // Functions
  function toggleAll() {
    setSelectedUsers(checked || indeterminate ? [] : users)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  const reference = collection(firestore, 'users')

  async function loadUsers() {
    const q = query(reference, orderBy('displayName', 'asc'), limit(10))
    const snapshot = await getDocs(q)

    const users: any = snapshot.docs.map((doc) => doc.data())
    const lastDoc: any = snapshot.docs[snapshot.docs.length - 1]
    setUsers(users)
    setLastDoc(lastDoc)

    setOffset(offset + 1)
  }

  const fetchMore = async () => {
    const q = query(
      reference,
      orderBy('displayName', 'asc'),
      startAfter(lastDoc),
      limit(10),
    )
    const snapshot: any = await getDocs(q)
    const moreUsers: any = snapshot.docs.map((doc: any) => doc.data())
    const lDoc: any = snapshot.docs[snapshot.docs.length - 1]

    setUsers((users) => moreUsers)
    setLastDoc(lDoc)
    setOffset(offset + 10)
    setEnd(end + 10)
  }

  const fetchLess = async () => {
    const q = query(
      reference,
      orderBy('displayName', 'asc'),
      startAfter(lastDoc),
      limit(10),
    )

    const snapshot: any = await getDocs(q)
    const moreUsers: any = snapshot.docs.map((doc: any) => doc.data())
    const lDoc: any = snapshot.docs[snapshot.docs.length - 1]

    setUsers((users: any) => moreUsers)
    setLastDoc(lDoc)
    setOffset(offset - 10)
    setEnd(end - 10)
  }

  // Effects
  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users including their name, agency, email and
            role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href={'/team/create-member'}>
            <a
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
            >
              Add user
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedUsers.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Agency
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map((user: any) => (
                    <tr
                      key={user.uid}
                      className={
                        selectedUsers.includes(user) ? 'bg-gray-50' : undefined
                      }
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedUsers.includes(user) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-green-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 sm:left-6"
                          value={user.email}
                          checked={selectedUsers.includes(user)}
                          onChange={(e) =>
                            setSelectedUsers(
                              e.target.checked
                                ? [...selectedUsers, user]
                                : selectedUsers.filter((u) => u !== user),
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedUsers.includes(user)
                            ? 'text-green-600'
                            : 'text-gray-900',
                        )}
                      >
                        {user.displayName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {user.agency}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {user.role}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-green-600 hover:text-green-900"
                        >
                          Edit
                          <span className="sr-only">, {user.displayName}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/** Here */}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <Pagination
          total={total}
          start={offset}
          end={end}
          fetchMore={fetchMore}
          fetchLess={fetchLess}
          usersShown={users.length}
        />
      </section>
    </div>
  )
}
