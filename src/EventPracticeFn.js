import React, {useState} from 'react';

// 이벤트 프랙티스를 함수형 컴포넌트로 구현해보자. 이건 실습으로 직접~~
const EventPracticeFn = () => {
    // 인풋 개수가 늘어나면 이렇게 하나씩 처리하기 귀찮으니까, useState에 문자열이 아닌 객체를 인자로 넣어보자.
    // 나중에 useReducer와 커스텀 Hookes를 사용하면 더 편하게 사용이 가능하다.
    const [form, setForm]= useState({
        message:'',
        message2:''
    });
    const { message, message2 } = form; // 비구조화 할당~
    const onChange = (e)=>{
        const nextForm = {
            ...form, // 기존 form 내용을 이 자리에 복사!
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌운다!
        }
        setForm(nextForm);
    }
    const handleClick = ()=>{
        alert(`${message} : ${message2}`);
        // 여기도 setForm으로 변경해준다!
        setForm({
            message:'',
            message2:''
        });
    }
    const handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            handleClick();
        }
    }
    return (
        <div>
            <h1>이벤트연습ㅋ</h1>
            <input type="text" name="message" placeholder="메세지1"
            value={message}
            onChange={onChange}
            onKeyPress={handleKeyPress}/>
            <input type="text" name="message2" placeholder="메세지2"
            value={message2}
            onChange={onChange}
            onKeyPress={handleKeyPress}/>
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default EventPracticeFn;