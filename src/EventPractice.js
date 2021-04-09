import React, {Component} from 'react';

class EventPractive extends Component {
    state = {
        message : ''
    }
    constructor(props){
        super(props);
        // 함수 호출시 this는 호출부에 따라 결정되므로, 메서드가 html의 이벤트로 등록되는 과정에서
        // 메서드와 this의 관계가 끊어져버림~ 그래서 컴포넌트 자신을 this로 인식하기 위해 바인딩해야함
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        console.log(this); // bind한 경우 EventPractice bind 안하면? undefined!
        this.setState({
            message: e.target.value
        });
    }
    handleClick(e){
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    render(){
        return(
            <div>
                <h1>이벤트연습ㅋ</h1>
                <input type="text" name="message" placeholder="아무거나 입력해라"
                value={this.state.message}
                onChange={this.handleChange}/>
                미리보기:{this.state.message}<br/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractive;