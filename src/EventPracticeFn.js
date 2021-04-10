import React, {useState} from 'react';

// 이벤트 프랙티스를 함수형 컴포넌트로 구현해보자. 이건 실습으로 직접~~
const EventPracticeFn = () => {
    const [message, setMessage]= useState('');
    const [message2, setMessage2] = useState('');
    const onChangeMessage = (e)=>{
        setMessage(e.target.value);
    }
    const onChangeMessage2 = (e)=>{
        setMessage2(e.target.value);
    }
    const handleClick = ()=>{
        alert(`${message} : ${message2}`);
        setMessage('');
        setMessage2('');
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
            onChange={onChangeMessage}
            onKeyPress={handleKeyPress}/>
            <input type="text" name="message2" placeholder="메세지2"
            value={message2}
            onChange={onChangeMessage2}
            onKeyPress={handleKeyPress}/>
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default EventPracticeFn;