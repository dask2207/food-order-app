import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is About Us Page</h2>

            <User name={"Krishna (Function)"} location={"Delhi (Function)"} contact={"9958284356 (Function)"} />

            <UserClass name={"Krishna (Class)"} location={"Delhi (Class)"} contact={"9958284356 (Class)"}/>
        </div>
    )
}

export default About;