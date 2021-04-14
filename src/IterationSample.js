import React, {useState} from 'react';

// 컴포넌트 배열 렌더링했을때 어떤 원소에 변동이 있었는지 알아내기 위해 key를 사용. 아래같은 index는 비효율적이니 고유값이 있다면 고유값으로 넣자.
const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text:'봄'},
        {id:2, text:'여름'},
        {id:3, text:'가을'},
        {id:4, text:'겨울'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목 추가할때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        // push로 기존 배열 변경이 아닌 concat으로 새로운 배열 만들어서 진행. 불변성 유지를 위해 항상 이런식으로 해야함.
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = (id) => {
        //console.log(id);
        const removedNames = names.filter((name)=>{
            return name.id !== id;
        });
        setNames(removedNames);
    };

    // onRemove 호출할때 이렇게 화살표 함수로 실행해야 실행이 된다. 그냥 onRemove는 안되넹.
    const nameList = names.map((name)=><li key={name.id} attr-key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
};

export default IterationSample;