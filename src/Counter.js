import React, {Component} from 'react';

// 클래스형 컴포넌트 state 실습
class Counter extends Component {
    constructor(props){
        super(props);
        // state 초기값 설정
        this.state = {
            number : 0
        }
    }
    render(){
        const {number} = this.state; //state 조회
        return(
            <div>
                <h1>{number}</h1>
                <button onClick={()=>{
                    // setstate로 state값 변경 가능
                    // this.setState({number:number+1});

                    // this.setState에 객체 대신 함수 인자 전달하면, 두번 수행 가능.
                    // 아래처럼 작성하면 +2씩 올라감. 객체 전달할때는 두번 수행 안됨.
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        }
                    },
                    // setState 두번째 인자로 콜백 함수 전달 가능. setState 끝나고 수행됨.
                    () => {
                        console.log("방금 setState가 호출됐어요~");
                    }
                    );
                    // 아래 코드도 위 코드와 동일. {} 생략하면 자동 return됨
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}> add 1 </button>
            </div>
        )
    }
}

export default Counter;