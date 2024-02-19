import { getProduct, getProducts } from "@/app/service/products";
import { notFound, redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";

type ParamsProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: ParamsProps) => {
  return {
    title: `제품명: ${params.slug}`,
  };
};

export const revalidate = 30;

const ProductPage = async ({ params: { slug } }: ParamsProps) => {
  const product = await getProduct(slug);

  if (!product) {
    redirect("/products");
    // notFound();
  }

  return (
    <>
      <h1>{product.name} 소개하는 페이지</h1>
      <Image
        alt={product.name}
        src={`/images/${product.imgUrl}.jpg`}
        width={800}
        height={800}
      />
      <BackButton />
    </>
  );
};

export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
};
export default ProductPage;
