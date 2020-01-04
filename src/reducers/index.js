import foodWords from "food-words";

// const parse_word = JSON.parse(foodWords);
export const initializeState = {
  data: [
    { name: "쫑 #1575564446374", point: "344444" },
    { name: "유윤선4#1575564172234", point: "30055" },
    { name: "가나다#1575685560013", point: "20009" },
    { name: "가나다#1575685524456", point: "20008" },
    { name: "가나다#1575685389883", point: "20007" },
    { name: "가나다#1575685216571", point: "20005" },
    { name: "가나다#1575685196665", point: "20004" },
    { name: "가나다#1575685044106", point: "20003" },
    { name: "가나다#1575685003961", point: "20002" },
    { name: "가나다#1575684952280", point: "20001" }
  ],
  ui_material: {
    ready: {
      title: ""
    },
    start: {
      title: ""
    }
  },
  food_list: foodWords,
  on_word: []
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
      console.log("TEST_INIT", action);
      return Object.assign({}, state, {
        // 1. 빈객체, 2. 현재 state 값 return, 3. 바꾸고자 하는 값
        [action.name]: action.addBy
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
