import React, {useEffect, useState} from 'react';

const Info = ()=>{
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    // useEffect : componentDidMount와 componentDidUpdate를 합친 것
    // 컴포넌트가 렌더링될때마다 특정 작업 수행
    // 두번째 인자로 []을 넘겨주면, 마운트될때만 수행
    // 두번째 인자로 [name]을 넘겨주면, 해당 값이 변경됐을때만 수행
    // 언마운트되기 전이나 업데이트되기 직전에 뭔가 수행하고 싶다면 뒷정리(cleanup) 함수 반환해주면 됨
    useEffect(()=>{
        console.log('effect!');
        console.log(name); // 이게 나중에 수행됨. 수정후 name
        return ()=>{
            console.log('cleanup');
            console.log(name); // 이게 먼저 수행됨. 수정전 name
        };
    }, []);

    const onChangeName = (e)=>{
        setName(e.target.value);
    };
    const onChangeNickname = (e)=>{
        setNickName(e.target.value);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickName} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickName}
                </div>
            </div>
        </div>
    );
};

export default Info;