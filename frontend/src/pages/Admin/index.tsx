import Navbar from "./Navbar";
import './style.css';
import { Switch } from 'react-router-dom';
import Users from "./user";
import PrivateRoute from "components/privateRoute";


const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
    <div className="admin-content">
      <Switch>
        <PrivateRoute path="/admin/products">
          <h1>Prodcut Crud</h1>
        </PrivateRoute>
        <PrivateRoute path="/admin/categories">
          <h1>Category Crud</h1>
        </PrivateRoute>
        <PrivateRoute path="/admin/users">
          <Users/>
        </PrivateRoute>
      </Switch>
    </div>
    </div>
  );
};

export default Admin;
