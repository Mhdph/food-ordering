import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firbase";

//save item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "fooditems", `${Date.now()}`), data, {
    merge: true,
  });
};

//get item
export const getAllfoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "fooditems"), orderBy("id", "desc"))
  );
  return items.doc.map((doc) => doc.data());
};
