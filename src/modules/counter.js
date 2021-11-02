//상수
const SET_DIFF = 'counter/SET_DIFF'  //counter 접두사를 붙이는 이유는 다른 모듈과 이름 중복을 막이 위해서
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

//액션 생성 함수
export const setDiff = diff => ({ type : SET_DIFF, diff });
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });

//기본값
const initialState = {
    number : 0,
    diff : 1, //증가, 감소 숫자
}

//reducer
export default function counter(state = initialState, action){
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff : action.diff
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };

        default:
            return state;
    }
}