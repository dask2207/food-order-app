import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");

        this.state = {
            userInfo: (
                {name: "dummy", location: "default"}
            )
        }
    }

    async componentDidMount() { // console.log("Parent ComponentDidMount")

        const data = await fetch("https://api.github.com/users/dask2207");
        const json = await data.json();

        this.setState({
            userInfo:json
        });
        console.log(json);
    }

    
    render() { // console.log("Parent render");
        const { name, location, avatar_url, url } = this.state.userInfo;

        return (
            <div className="p-10  text-center text-lg font-semibold">
                <h1>About</h1>
                <h2>This is About Us Page</h2>

                {/* <img src={avatar_url} /> */}
                <UserClass name={name}
                    profile={url} 
                    // image={avatar_url}
                    contact={"9958284356 (Class)"}/>
            </div>
        )
    }
}

/*
    CALLING CYCLE =====

    -Parent constructor
    -Parent render
     
     -First Child Constructor
     -First Child Render
     -Second child constructor
     -second child render
     -third child constructor
     -third child render

     <---- Dom updating - In Single Bacth ----->

     -First child componentDidMount
     -Second child componentDidMount
     -Third child componentDidMount
     
    -Parent componentDidMount


*/

export default About;
