import React, { Component } from 'react'

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            a:'',
            text:''
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            a: e.target.value
        })
        
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            count:this.state.a
        })
    }
    render() {
        return (
            <div className="container">
                <h2>TikTik</h2>
                 <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.content} onChange={this.handleChange}></input><br/>
                    <button onClick={this.handleSubmit}>Start</button>
                 </form>
                <h1>{this.state.count}</h1><br/>
                
            </div>
        )
    }
    //setInterval


    //clear Interval
    componentDidMount(){
        
        this.checkState()
        this.doIntervalChange()
        
    }
    doIntervalChange(){this.myInterval = setInterval(()=>{
        this.setState(prevState => ({
            count: (prevState.count)>0 ? (prevState.count-1) : 0
        }))
    },1000)}

    checkState=()=>{
        this.setState({
            text: this.state.count===0 ? ' Time Up !' : ''
        })
        console.log("hello")
    }
    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
}

export default Timer
