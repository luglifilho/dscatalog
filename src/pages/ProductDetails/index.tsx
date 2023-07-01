import './style.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';


const ProductDetaisl = () => {
    return (
        <div className='prodcutDetails-container'>
            <div className='base-card productDetails-card'>
                <div className='goback-container'>
                    <ArrowIcon/>
                    <h2>VOLTAR</h2>
                </div>
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