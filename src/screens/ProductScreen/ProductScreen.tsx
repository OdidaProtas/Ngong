import React from "react";
import { useParams } from "react-router";
import useMyProducts from "../../hooks/stores/useMyProducts";
import useMyStores from "../../hooks/stores/useMyStores";
import Product from "./Product/Product";
import ProductAppBar from "./ProductAppbar";

export default function ProductScreen() {
  useMyProducts();
  useMyStores();
  const { id }: any = useParams();
  return (
    <div>
      <ProductAppBar>
        <Product />
      </ProductAppBar>
    </div>
  );
}
