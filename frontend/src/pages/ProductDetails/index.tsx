import axios from 'axios';
import './style.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Link, useParams } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';
import { useEffect, useState } from 'react';


type UrlParams = {
    productId: string;
}


const ProductDetaisl = () => {

    const { productId } = useParams<UrlParams>();

    const [product, setProduct] = useState<Product>();

        useEffect(() => {
            axios.get(`${BASE_URL}/products/${productId}`)
            .then(response => {
                setProduct(response.data);
            });
        },[productId]);

        

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
                            <img src={product?.imgUrl} alt="Nome do Produto" />

                        </div>
                        <div className='name-price-container'>
                            <h1>{product?.name}</h1>
                          { product && <ProductPrice price={product?.price}/>  }
                        </div>

                    </div>
                    <div className='col-xl-6'>
                        <div className='description-container'>
                            <h2>Descrição do Produto</h2>
                            <p>{product?.description}</p>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProductDetaisl;