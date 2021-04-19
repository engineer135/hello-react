import React, {useEffect, useReducer, useState} from 'react';

// dispatch의 파라미터로 넘겨주는 값이 action임. action은 객체든 뭐든 다 가능함..
function reducer(state, action){
    // 불변성을 지키면서 업데이트한 새로운 상태를 반환
    return {
        ...state,
        [action.name] : action.value // 이런식으로 useReducer 사용하면 인풋 개수가 많아져도 useSate 여러개 안써도 되는 장점이 있음!
    };
};

const Info = ()=>{
    const [state, dispatch] = useReducer(reducer,{
        name:'',
        nickname:''
    });
    const {name, nickname} = state;

    const onChange = (e)=>{
        dispatch(e.target);
    };

    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;