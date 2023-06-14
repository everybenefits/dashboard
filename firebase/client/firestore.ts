import { firestore } from '@firebase/index'

import { collection, query, getDocs, addDoc } from 'firebase/firestore'

export async function getDocuments(col: string) {
  const database = collection(firestore, col)
  const queryUsers = query(database)
  const querySnapshot = await getDocs(queryUsers)

  return querySnapshot
}

export async function createDocument(col: string, data: any) {
  const collectionReference = collection(firestore, col)

  try {
    const docRef = await addDoc(collectionReference, data)
    return docRef.id
  } catch (e: any) {
    throw new Error(e)
  }
}
