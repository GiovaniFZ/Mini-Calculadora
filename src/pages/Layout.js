import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Origem</Link>
          </li>
          <li>
            <Link to="/destino">Destino</Link>
          </li>
          <li>
            <Link to="/pacote">PacoteEnvio</Link>
          </li>
          <li>
            <Link to="/valorfin">ValorFinal</Link>
          </li>
          <li>
            <Link to="/fim">Final</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;