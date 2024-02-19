import React from "react";
import Link from "next/link";
import { ProductType } from "../service/products";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  return await response.json();
};

const getCatFacts = async () => {
  const response = await fetch("https://meowfacts.herokuapp.com/", {
    // 0으로 설정 시 SSG가 아니라 SSR처럼 동작
    next: { revalidate: 10 },
    // 또는 cache: "no-store"를 설정하여 캐시를 사용하지 않도록 설정하여도 SSR처럼 동작
  });
  return await response.json();
};
const ProductsPage = async () => {
  const [{ res: products }, { data: catFacts }] = await Promise.all([
    getProducts(),
    getCatFacts(),
  ]);

  return (
    <>
      <h1 className='font-bold'>products</h1>
      <Image alt='clothes' src={clothesImage} width={900} height={900} />
      <ul>
        {products?.map((product: ProductType) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <p>{catFacts[0]}</p>
    </>
  );
};

export default ProductsPage;
