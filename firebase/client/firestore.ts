import { firestore } from '@firebase/index'

import { collection, query, getDocs } from 'firebase/firestore'

export async function getDocuments(col: string) {
  const database = collection(firestore, col)
  const queryUsers = query(database)
  const querySnapshot = await getDocs(queryUsers)

  return querySnapshot
}
