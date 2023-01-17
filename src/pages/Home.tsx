import {Link} from 'react-router-dom'

export function Home() {
  return (
    <>
      <h1>Hardi Mahendra</h1>
        <button>          
          <Link to="/store" as={Link}>
            Go to Product
          </Link>
      </button>
    </>
  )
}
