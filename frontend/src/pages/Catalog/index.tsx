import ProductCard from 'components/ProductCard';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';

import Pagination from 'components/Pagination';
import { useState, useEffect } from 'react';
import { SpringPage } from 'types/vendor/spring';

import { BASE_URL, requestBackend } from 'util/requests';
import  { AxiosRequestConfig } from 'axios';
import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/products",
      params: {
        page: 0,
        size: 12,
      },
    };
    requestBackend(params)
    .then((response) => {
    setPage(response.data);
    });
  }, []);

  return (
    <div className="container my-4 catalog-contianer">
      <div className="row catalog-title-container">
        <h1>Catálago de Produtos</h1>
      </div>
      <div className="row">
        {page?.content.map((product) => {
          return (
            <div className="col-sm-6 col-lg-4 col-xl-3 " key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
