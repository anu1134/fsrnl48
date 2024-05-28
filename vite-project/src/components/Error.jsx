import { useRouteError } from "react-router-dom";

function Error() {

    const err = useRouteError();

    console.log(err);

    return (
        <>
            <h1>Please Enter Correct URL!!</h1>
            <h2>{err.status}</h2>
            <h2>{err.data}</h2>
        </>
    )
}

export default Error;