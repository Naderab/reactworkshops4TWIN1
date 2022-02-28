import React from "react";
import styled from "styled-components";
import { useApi } from "./hooks/useApi";
const Product = React.lazy(() => import("./Components/Product"));

export default function Products() {

    const [products,err,reload] = useApi('products');
    return (
        <ProductsWrapper> {
          products ? products.map((product, index) => (
                <Product product={product}
                    key={index}></Product>
            )): <h1>Products not found</h1>
        } </ProductsWrapper>
    );
}
const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;