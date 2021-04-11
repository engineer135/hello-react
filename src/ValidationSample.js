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
        )
    };

    render(){
        return(
            <div>
                <input type="password" value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기맨~</button>
            </div>
        );
    }
}

export default ValidationSample;