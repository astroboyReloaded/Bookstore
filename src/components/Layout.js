import { NavLink, Outlet } from 'react-router-dom';

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
      <header>
        <h1>Bookstore CMS</h1>
        <nav>
          <ul>
            {routes.map((route) => (
              <li key={route.label}>
                <NavLink to={route.path}>{route.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
