import React, {useEffect, useState} from 'react';

const Info = ()=>{
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    // useEffect : componentDidMount와 componentDidUpdate를 합친 것
    // 컴포넌트가 렌더링될때마다 특정 작업 수행
    // 두번째 인자로 []을 넘겨주면, 마운트될때만 수행
    // 두번째 인자로 [name]을 넘겨주면, 해당 값이 변경됐을때만 수행
    useEffect(()=>{
        console.log('렌더링 완료!');
        console.log({name, nickName});
    }, [name]);

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