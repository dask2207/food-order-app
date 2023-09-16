import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();

    return (
        <div>
            <h1>Oops</h1>
            <h2>Page Not Found</h2>
            <p>{err.status} : {err.statusText}</p>
        </div>
    )
}

export default Error;