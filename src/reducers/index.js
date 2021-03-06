import foodWords from "food-words";
let localData = localStorage.getItem("typingPractice");
if (!localData) {
  localStorage.setItem("typingPractice", `[{"name":"이름없음#","point":0}]`);
  localData = JSON.stringify([{ name: "이름없음#", point: 0 }]);
}
const ranks = JSON.parse(localData);

// const parse_word = JSON.parse(foodWords);
export const initializeState = {
  data: ranks,
  player_name: "",
  game_score: 0,
  food_list: foodWords,
  on_word: [],
  game_over: false
};

/* "TEST_INIT" case 실행
  saga 함수에서 넘겨 받았던 action.name("on_word")의 키에 action.addBy(saga 함수에서 뽑아낸 12개의 단어 배열)를 넣어
  준다
  여기서 넣어 줄 대상은 store, store 내에 action.name()을 찾아서 action.addBy 을 넣는다.
*/

/* 액션 생성 함수 */
export const initialReducer = (state = {}, action) => {
  switch (action.type) {
    case "TEST_INIT":
      return Object.assign({}, state, {
        // 1. 빈객체, 2. 현재 state 값 return, 3. 바꾸고자 하는 값
        [action.name]: action.addBy
      });
    case "UPDATE_BOARD":
      return Object.assign({}, state, {
        // 1. 빈객체, 2. 현재 state 값 return, 3. 바꾸고자 하는 값
        [action.name]: action.addBy,
        game_score: action.game_score
      });
    case "TEST_SPINNER":
      return Object.assign({}, state, {
        // 1. 빈객체, 2. 현재 state 값 return, 3. 바꾸고자 하는 값
        loading: action.addBy
      });
    default:
      return state;
  }
};
