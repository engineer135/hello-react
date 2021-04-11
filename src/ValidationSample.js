import React, {Component} from 'react';
import "./ValidationSample.css"

// class만 변경해서 비번 맞으면 녹색, 틀리면 빨강 변경해주기
class ValidationSample extends Component {
    state = {
        password:'',
        clicked:false,
        validated:false
    }

    handleChange = (e) => {
        this.setState(
            {
                password : e.target.value
            }
        )
    };

    handleButtonClick = (e) => {
        this.setState(
            {
                clicked:true,
                validated:this.state.password === '0000'
            }
        );
        this.input.focus(); // 버튼 클릭 후 다시 비밀번호 입력창으로 포커싱. 이렇게 DOM에 직접적으로 접근 필요한 경우 ref 사용!
    };

    render(){
        return(
            <div>
                <input
                ref={(ref)=>this.input=ref} // 콜백함수를 이용한 ref 달기. this.input은 input요소의 DOM을 가리키게 됨. this.passwordInput 이런것도 가능..
                type="password" value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기맨~</button>
            </div>
        );
    }
}

export default ValidationSample;