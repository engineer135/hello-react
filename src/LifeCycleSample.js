import React, {Component} from 'react';

// 업데이트를 발생시키는 요인
// 1. props 변경
// 2. state 변경
// 3. 부모 컴포넌트 리렌더링
class LifeCycleSample extends Component {
    state = {
        number:0,
        color:null,
    }

    myRef = null; //ref 설정할 부분

    constructor(props){
        super(props);
        console.log('cunstructor');
    }

    // 1. 업데이트 시작전 실행. props의 변화에 따라 state값에도 변화 주고 싶을때 사용.
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color: nextProps.color};
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    // 2. 컴포넌트 리렌더링 여부 결정. true/false 리턴.
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // 4. 컴포넌트 변화를 Dom에 반영하기 바로 직전에 호출
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    // 5. 컴포넌트 업데이트 끝나면 호출
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapShot){
            console.log('업데이트되기 직전 색상: ', snapShot);
        }
    }

    // 3. 컴포넌트 리렌더링
    render(){
        console.log('render');

        const style = {
            color : this.props.color
        };

        return(
            <div>
                {/* 의도적으로 에러를 발생시키기 위해 존재하지 않는 객체 조회 */}
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;