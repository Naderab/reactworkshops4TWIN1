import React from "react";
import styled from "styled-components";
import products from "./products.json";
const Product = React.lazy(() => import("./Components/Product"));

export default function Products() {
    return (
        <ProductsWrapper> {
            products.map((product, index) => (
                <Product product={product}
                    key={index}></Product>
            ))
        } </ProductsWrapper>
    );
}
const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;