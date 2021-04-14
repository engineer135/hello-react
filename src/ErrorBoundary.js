import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
        console.log({error, info});
    }
    render(){
        if(this.state.error) return <div>에러가 발생했습니다</div>;
        return this.props.children; {/* 아~ 칠드런으로 LifeCycleSampe을 받으니까..이걸 리턴하는구나.. */}
    }
}

export default ErrorBoundary;