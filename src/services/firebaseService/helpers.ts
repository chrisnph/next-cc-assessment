import {
  firebaseDatabase,
  firebaseStorage,
} from "../firebaseService/initialize";
import { ref, query, get, DataSnapshot } from "firebase/database";

export const queryDatabase = async (path: string) => {
  const que = query(ref(firebaseDatabase, path));
  const result: Array<{ id: string }> = [];

  await get(que).then((snapshot: DataSnapshot) => {
    return snapshot.forEach((child) => {
      const childData = child.val();
      const childId = child.key;
      result.push({ ...childData, id: childId });
    });
  });

  return result;
};

// export const queryStorage = async (path: string) => {
//   const url = await firebaseStorage.ref(path).getDownloadURL();
//   return url;
// };

// export const updateDatabase = async (path: string, data: any) => {
//   await firebaseDatabase.ref(path).update(data);
// };
