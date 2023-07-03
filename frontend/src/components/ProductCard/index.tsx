import './styles.css';

//import ProductImg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';
import { number } from 'yargs';
import { Product } from '../../types/product';

type Props = { 
    product: Product;
}

const ProductCard = ({product}: Props) => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="card-bottom-container">
                <h6>{product.name}</h6>
                <ProductPrice price={product.price} />
            </div>
        </div>
    );
}

export default ProductCard;