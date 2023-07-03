import axios from 'axios';
import './style.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';


const ProductDetaisl = () => {

        let product: Product;
        axios.get(BASE_URL + "/products/2")
        .then(response => {
            console.log(response.data)
        });

    return (
        <div className='prodcutDetails-container'>
            <div className='base-card productDetails-card'>
            <Link to="/products">
                <div className='goback-container'>
                    <ArrowIcon/>
                    
                    <h2>VOLTAR</h2>                    
                </div>
                </Link>
                <div className='row'>
                    <div className='col-xl-6'>
                        <div className='img-container'>
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="Nome do Produto" />

                        </div>
                        <div className='name-price-container'>
                            <h1>Nome do produto</h1>
                            <ProductPrice price={2345.67}/>
                        </div>

                    </div>
                    <div className='col-xl-6'>
                        <div className='description-container'>
                            <h2>Descrição do Produto</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloremque.</p>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProductDetaisl;