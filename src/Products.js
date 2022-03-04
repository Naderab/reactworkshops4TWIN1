import React from "react";
import styled from "styled-components";
import { useApi } from "./hooks/useApi";
import { queryApi } from "./utils/queryApi";
const Product = React.lazy(() => import("./Components/Product"));

export default function Products() {

    const [products,err,reload] = useApi('products');
    const deleteProduct= async (id)=>{
        const[,err] = await queryApi('product/'+id,{},'DELETE',false);
        if(err){
            console.log(err);
        } else await reload();
    }
    return (
        <ProductsWrapper> {
          products ? products.map((product, index) => (
                <Product deleteProduct={deleteProduct} product={product}
                    key={index}></Product>
            )): <h1>Products not found</h1>
        } </ProductsWrapper>
    );
}
const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;