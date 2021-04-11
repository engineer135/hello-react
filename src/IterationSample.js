import React from 'react';

// 컴포넌트 배열 렌더링했을때 어떤 원소에 변동이 있었는지 알아내기 위해 key를 사용. 아래같은 index는 비효율적이니 고유값이 있다면 고유값으로 넣자.
const IterationSample = () => {
    const names = ['봄','여름','가을','겨울'];
    const nameList = names.map((name,index)=><li key={index}>{name}</li>);
    return <ul>{nameList}</ul>
};

export default IterationSample;