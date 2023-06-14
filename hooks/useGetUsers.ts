import { useState, useEffect } from 'react'
import { getDocuments } from '@firebase/client/firestore'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { firestore } from '@firebase/index'

export function useGetUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getDocuments('users').then((querySnapshot) => {
      const users: any = []

      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          email: doc.data().email,
          agency: doc.data().agency,
          role: doc.data().role,
          phone: doc.data().phone,
        })
      })
      setUsers(users)
    })
  }, [])

  return users
}

export function useGetInactiveUsers() {
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const q = query(
      collection(firestore, 'users'),
      where('status', '!=', 'active'),
    )
    getDocs(q).then((querySnapshot) => {
      const size = querySnapshot.size

      setQuantity(size)
    })
  }, [])

  return quantity
}
