import {Link} from 'react-router-dom'

export function Home() {
  return (
    <>
      <div className="container-home">
        <h1>Shopping Tech</h1>
        <button>
            <Link to="/store">
              Go to Product
            </Link>
        </button>
      </div>
    </>
  );
}
