import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    // 이렇게 useMemo 함수를 호출하면서 getAverage를 첫번째 파라미터로 넘겨주고, 두번째 파라미터로 list를 넘겨주면 list 배열의 내용이 바뀔때만 getAverage 함수 호출함
    const avg = useMemo(()=>getAverage(list), [list]);

    // 이렇게 하면 렌더링할때마다(인풋내용이 수정될때마다) 평균값 계산이 됨. 낭비.. 이를 막기 위해 useMemo Hook을 사용한다.
    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>
    );
};

export default Average;