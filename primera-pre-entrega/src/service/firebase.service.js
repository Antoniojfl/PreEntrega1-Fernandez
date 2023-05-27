import { db } from './firebase.config'
import { collection, getDocs, addDoc, query, where, documentId  } from "firebase/firestore"

export const getDocuments = async (collectionName) => {

    const productsCollection = collection(db,collectionName);
    const result = await getDocs(productsCollection)
    const resultParsed = result.docs.map((doc)=> {
        return {
            id: doc.id,
            ...doc.data()
        }
    }) 

    return resultParsed

}

export const syncAllDocuments = async (items) => {
    await Promise.allSettled(
        items.map((item)=> addDoc(collection(db, "products"), item))
    )

}

export const saveDoc = async (items,collectionName) => {
    await Promise.allSettled(
        items.map((item)=> addDoc(collection(db, collectionName), item))
    )

}

export const getDocumentById = async (collectionName, id) => {

    const productsRef = collection(db, collectionName);
    const q = query(productsRef, where(documentId(), "==", id));
    const result = await getDocs(q)
    const resultParsed = result.docs.map((doc)=> {
        return {
            id: doc.id,
            ...doc.data()
        }

    })

    return resultParsed
}
  