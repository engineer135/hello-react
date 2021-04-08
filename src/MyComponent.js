import React from 'react';

const MyComponent = (props) => {
    const {name, children} = props; // 비구조화 할당
    return(
        <div>
            나의 새롭고 멋진 컴포넌트 예~ {name}<br/>
            나의 칠드런값은 {children}
        </div>
    ) 
}

MyComponent.defaultProps = {
    name: '기본 이름'
}

export default MyComponent;