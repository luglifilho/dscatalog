import Navbar from "./Navbar";
import './style.css';
import { Route, Switch } from 'react-router-dom';
import Users from "./user";


const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
    <div className="admin-content">
      <Switch>
        <Route path="/admin/products">
          <h1>Prodcut Crud</h1>
        </Route>
        <Route path="/admin/categories">
          <h1>Category Crud</h1>
        </Route>
        <Route path="/admin/users">
          <Users/>
        </Route>
      </Switch>
    </div>
    </div>
  );
};

export default Admin;
