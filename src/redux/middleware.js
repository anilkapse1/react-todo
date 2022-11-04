
import { takeEvery } from "@redux-saga/core/effects";
import { ADD_TODO } from "./utils";

export function* addTodo() {
  yield takeEvery(ADD_TODO, function* () {
    //perform asyn task
  });
}

export default function* () {
  yield* addTodo();
}
