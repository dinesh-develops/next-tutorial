import React from "react";
import { useRouter } from "next/router";
const Products = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h1>Inside dynamic routes</h1>
      <h2>Product with ID {productId}</h2>
    </>
  );
};

export default Products;
