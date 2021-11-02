import { createStore } from "redux"; //createStore : store를 만들어주는 함수

//초깃값
const initialState = {
    counter : 0,
    text : '',
    list : []
};


//액션 상수 정의 = 해당 프로젝트에 필요한 액션
//액션 상수의 이름은 대문자와 _를 사용해서 만들어야 함(규칙, 구별하기 위해서)
const INCREASE = 'INCREASE';  
const DECREASE = 'DECREASE'; 
const CHANGE_TEXT = 'CHANGE_TEXT';  
const ADD_TO_LIST = 'ADD_TO_LIST';


//액션 생성 함수
const increase = () => ({
    type : INCREASE,
})

const decrease = () => ({
    type : DECREASE,
})

const changeText = text => ({
    type : CHANGE_TEXT,
    text
})

const addToList = item => ({
    type : ADD_TO_LIST,
    item
})


//reducer
//state = initialState → 기본값 설정, 
//리덕스에서 초기 상태를 만들때 reducer를 한 번 호출하는데 그때 해당 값이 undefind면 안되기 때문
function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE : 
            return {
                ...state, 
                counter : state.counter + 1,
            };
        case DECREASE : 
            return {
                ...state, 
                counter : state.counter - 1,
            };
        case CHANGE_TEXT : 
            return {
                ...state, 
                text : action.text,
            };
        case ADD_TO_LIST : 
            return {
                ...state, 
                list : state.list.concat(action.item),  //push를하면 기존 list가 변경되기 때문에 concat을 사용해 반환해야 함
            };

        default : 
            return state;
        
    }
}

//store 만들기
const store = createStore(reducer);

//구독
const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());  //reducer에 action 전달, action = increase()
store.dispatch(decrease());
store.dispatch(changeText('안녕'));
store.dispatch(addToList({id : 1, text : '와우'}));

//why? dispatch(increase())를 하면, reducer가 실행되는가
