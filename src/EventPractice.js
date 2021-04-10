import React, {Component} from 'react';

class EventPractive extends Component {
    state = {
        message : '',
        message2 : ''
    }
    constructor(props){
        super(props);
        // 함수 호출시 this는 호출부에 따라 결정되므로, 메서드가 html의 이벤트로 등록되는 과정에서
        // 메서드와 this의 관계가 끊어져버림~ 그래서 컴포넌트 자신을 this로 인식하기 위해 바인딩해야함
        // 생성자에 메서드 바인딩 매번 하기 귀찮으면 화살표 함수로 만들면 된다.
        //this.handleChange = this.handleChange.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }
    handleChange = (e)=>{
        console.log(this); // bind한 경우 EventPractice bind 안하면? undefined! but 화살표 함수 형태로 만들면 바인딩 필요없음
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = ()=>{
        alert(`${this.state.message} : ${this.state.message2}`);
        this.setState({
            message: '',
            message2: ''
        });
    }
    render(){
        return(
            <div>
                <h1>이벤트연습ㅋ</h1>
                <input type="text" name="message" placeholder="메세지1"
                value={this.state.message}
                onChange={this.handleChange}/>
                <input type="text" name="message2" placeholder="메세지2"
                value={this.state.message2}
                onChange={this.handleChange}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractive;