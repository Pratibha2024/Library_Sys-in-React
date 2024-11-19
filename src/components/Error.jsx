import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const err = useRouteError();
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <h3> {err.status} {err.statusText} </h3>
      <h3>{err.data}</h3>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Error;
