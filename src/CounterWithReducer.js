import React, { useReducer } from 'react';

// useReducer 사용하면 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있다는 장점이 있음!
function reducer(state, action){
    //action.type에 따라 다른 작업 수행
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value+1};
        case 'DECREMENT':
            return {value: state.value-1};
        default:
            // 아무것도 해당되지 않을때는 기존 상태 반환
            return state;
    }
}

const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, {value:0}); // 첫번째 파라미터는 리듀서 함수, 두번째는 기본값

    return(
        <div>
            <p>현재 카운터 값은 <b>{state.value}</b>입니다.</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    );
};

export default CounterWithReducer;