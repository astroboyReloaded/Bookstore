import { NavLink, Outlet } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Layout = () => {
  const routes = [
    {
      path: '/',
      label: 'BOOKS',
    },
    {
      path: '/categories',
      label: 'CATEGORIES',
    },
  ];

  return (
    <>
      <header className="headerContainer">
        <h1>Bookstore CMS</h1>
        <nav>
          <ul className="navLinksUl">
            {routes.map((route) => (
              <li key={route.label}>
                <NavLink to={route.path}>{route.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <spam className="avatarContainer">
          <ImUser className="avatar" />
        </spam>
      </header>
      <main className="mainContainer">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
