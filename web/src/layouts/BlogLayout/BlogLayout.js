import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  return (
    <>
      <header>
        <Link to={routes.home()}>Redwood Blog</Link>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <button onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </button>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
