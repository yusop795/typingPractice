import { all, takeLatest, takeEvery, put } from "redux-saga/effects";
import foodWords from "food-words";
import getRandomArray from "../helpers/getRandomArray";
import makeNewRank from "../helpers/makeNewRank";
// import * as _ from "lodash";

const words_group = foodWords;
function* findWordToClear(action) {
  const prev_word = action.addBy.prevWord;
  /* 워드 클리어 시 새로운 워드 넣어 줄 것 */
  let voca = getRandomArray(words_group);
  prev_word[action.addBy.inputWord.place].word = voca;
  yield put({
    type: action.action,
    name: action.name,
    addBy: prev_word,
    game_score: action.addBy.score
  });
}

function* modifyStoreValue(action) {
  yield put({ type: action.action, addBy: action.data, name: action.name });
}

/* action 함수는 단순히 store의 값을 넣고 빼고 수정하는 작업만 할 수 있기 때문에 데이터를 받아서 UI에 보여 주기 위한 간단한 작업, 또는 validation 작업을 거치기 위해서 saga를 사용한다
saga를 통해 어떤 action 함수를 사용해서 어떤 데이터, 또는 UI에 필요한 상태값을 스토어에 넣을 것인지를 결정할 수 있다
*/

function* setInitialWord(action) {
  /* foodWords 모듈을 변수에 담음 */
  const words = foodWords;
  let initial_words = [];

  for (let i = 0, len = 12; i < len; i++) {
    /*getRandomArray 함수 실행해서 랜덤으로 단어 뽑아낸다 */
    let voca = getRandomArray(words);
    // console.log("for 문", voca);
    let voca_object = {
      word: voca,
      place: i
    };
    initial_words.push(voca_object);
  }
  /* put 함수 타고 스토어에 뽑아낸 단어를 넣을 수 있다 
    TypingField에서 saga call 할 때 넘겨 받았던 객체 내 action 키로 받았던 "TEST_INIT"로 실행 시키고자 하는 action을 찾는다
  => reducers/index.js 파일로*/

  console.log("initial_Words", initial_words);
  yield put({ type: action.action, addBy: initial_words, name: action.name });
}

/* INITIAL_WORDS 키를 받았을 때  setInitialWord function 실행 */

export function* rootSaga() {
  yield all([
    yield takeLatest("CLEAR_WORD", findWordToClear),
    yield takeEvery("INITIAL_WORDS", setInitialWord),
    yield takeEvery("CHANGE_STORE_VALUE", modifyStoreValue)
  ]);
}
