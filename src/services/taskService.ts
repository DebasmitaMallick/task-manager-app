import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { Task } from "../types";

export const getTasks = async (): Promise<Task[]> => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Task[];
};

// Add Task
export const addTask = async (task: { title: string }) => {
  return await addDoc(collection(db, "tasks"), task);
};

// Edit Task
export const editTask = async (id: string, updatedTask: { title: string }) => {
  const taskRef = doc(db, "tasks", id);
  return await updateDoc(taskRef, updatedTask);
};

// Delete Task
export const deleteTask = async (id: string) => {
  return await deleteDoc(doc(db, "tasks", id));
};
