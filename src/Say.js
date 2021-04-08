import React, { useState } from 'react';

// 함수형 컴포넌트에서 state 변경하기. useState 사용.
const Say = ()=>{
    // 비구조화 할당으로 useState 리턴값 할당
    // useState 인자는 상태의 초깃값 넣음. 숫자 문자 객체 배열 모두 ok
    // 리턴된 배열의 첫번째 원소는 현재 상태, 두번째 원소는 상태 바꾸는 함수(setter)
    const [text, setText] = useState('');
    const onClickEnter = () => setText('헬로!');
    const onClickLeave = () => setText('굿바이!');

    const [color, setColor] = useState('red');
    
    // jsx에서 인라인 스타일링할때는 style={스타일객체}
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{text}</h1>
            <button style={{color:'red'}} onClick={()=>setColor('red')}>빨강</button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>초록</button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>블루</button>
        </div>
    )
};
/*
★ state는 무조건 setState or useState로 받은 세터 함수 사용해야함
배열이나 객체는 사본을 만들어서 업데이트한다.
확실히 useState 쓰는게 편하고 좋네. 이게 메인 개발 방식이 될거임! 함수형 컴포넌트 + Hooks!
*/
export default Say;