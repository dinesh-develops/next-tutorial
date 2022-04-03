import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <h1>Inside Nested Dynamic Routes</h1>
      <div>
        Product Page {productId} at review ID {reviewId}
      </div>
    </>
  );
};

export default Review;
