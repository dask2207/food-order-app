import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
        }

        // console.log(this.props.name + "Child constructor");
    }

    componentDidMount(){
        console.log(this.props.name +"Child componentDidMount");

        // this.timer = setInterval(()=>{
        //     console.log("Namaste");
        // }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
        // if(this.state.count != prevState.count){

        // } //Here we using the place of useEffect(()=>{},[count]) dependency count 

        // if(this.state.count != prevState.count || this.state.count2 != prevState.count2){

        // } //Here we using the place of useEffect(()=>{},[count, count2]) dependency count 
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    render(){
        // console.log(this.props.name +"Child render");

        return(
            <div className="user-card">
                {/* <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1
                    })
                }}>Count Increase</button> */}
                <img src={this.props.image}/>
                <h2>Name : {this.props.name}</h2>
                <h3>Profile : {this.props.profile}</h3>
                <h3>Contact : {this.props.contact}</h3>
            </div>
        )
    }
}

export default UserClass; 