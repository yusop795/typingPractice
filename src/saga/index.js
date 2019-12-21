import { all, takeLatest, takeEvery, put } from "redux-saga/effects";
import foodWords from "food-words";
import getRandomArray from "../helpers/getRandomArray";

function* findWordToClear() {
  /* 워드 클리어 시 새로운 워드 넣어 줄 것 */
  const words = foodWords;
  let set_words = [];
}

function* setInitialWord(action) {
  const words = foodWords;
  let initial_words = [];
  for (let i = 0, len = 12; i < len; i++) {
    let voca = getRandomArray(words);
    console.log("for 문", voca);
    let voca_object = {
      word: voca,
      pleac: i
    };
    initial_words.push(voca_object);
  }
  console.log("initial_Words", initial_words);
  yield put({ type: action.action, addBy: initial_words, name: action.name });
}

export function* rootSaga() {
  yield all([
    yield takeLatest("CLEAR_WORD", findWordToClear),
    yield takeEvery("INITIAL_WORDS", setInitialWord)
  ]);
}
