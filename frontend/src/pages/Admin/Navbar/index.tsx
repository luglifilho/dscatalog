import './style.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <NavLink to="/admin/products" className='admins-nav-item '>
            <p>Produtos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className='admins-nav-item '>
            <p>Categoria</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className='admins-nav-item'>
            <p>Usuários</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
