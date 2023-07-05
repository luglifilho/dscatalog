import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import Login from './login';

const Auth = () => {

    return (

        <div className="auth-container">
            <div className="auth-banner-container">
                <h1> Divulge seus produtos  no DSCatalog</h1>
                <p>Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
                <AuthImage />
            </div>
            <div className="auth-form-content">
                <Switch>
                    <Route path="/admin/auth/login">
                        <Login />
                    </Route>
                    <Route path="/admin/auth/singup">
                        <h1> Card de SingUp</h1>
                    </Route>
                    <Route path="/admin/auth/recover">
                        <h1> Card de Recover</h1>
                    </Route>
                </Switch>

            </div>

        </div>
    );
}

export default Auth;