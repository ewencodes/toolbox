import { atom } from "jotai";

export type Todo = {
  title: string;
  isCompleted: boolean;
};

export default atom<Todo[]>([]);
