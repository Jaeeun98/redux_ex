import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import counter, { increase, decrease, setDiff } from '../modules/counter';
//컨테이너 컴포넌트 : 리덕스에 있는 상태를 조회하거나 액션을 디스패치 할 수 있는 컴포넌트

function CounterContainer() {
//store.getState() 내용이 state로 옴
/*
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));
  
  객체를 새롭게 만들기 때문에 쓸데없이 리렌더링 됨
  ↓ 처럼 바꿔주면 막을 수 있음
*/
  const number = useSelector(state => state.counter.number);
  const diff = useSelector(state => state.counter.diff);

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;