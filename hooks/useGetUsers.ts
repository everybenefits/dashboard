import { useState, useEffect } from 'react'
import { getDocuments } from '@firebase/client/firestore'

export function useGetUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getDocuments('users').then((querySnapshot) => {
      const users: any = []

      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          displayName: doc.data().displayName,
          email: doc.data().email,
          agency: doc.data().agency,
          role: doc.data().role,
        })
      })
      setUsers(users)
    })
  }, [])

  return users
}
