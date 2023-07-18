import { Switch, Route } from "react-router-dom";
import List from "./List";
import Form from "./Form";


const Products = () => {

    return (
        <Switch>
            <Route path="/admin/products" exact>
                    <List />
            </Route>
            <Route path="/admin/products/:productId">
                    <Form />
            </Route>
        </Switch>
    )
}

export default Products;