import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface Item {
  id: string;
  text: string;
  done: boolean;
}

const preloadState = [
  {
    id: "1",
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: "2",
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: "3",
    text: "Context 만들기",
    done: false,
  },
  {
    id: "4",
    text: "기능 구현하기",
    done: false,
  },
] as Item[];

const todoSlice = createSlice({
  name: "todos",
  initialState: preloadState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload);
      },
      prepare: (text: string) => {
        const id = nanoid();
        const done = false;
        return { payload: { id, text, done } };
      },
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo } = actions;
export default reducer;
