import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <Link to='/'></Link>
        </div>
    );
};

export default ErrorPage;