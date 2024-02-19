"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return <button onClick={() => router.replace("/products")}>뒤로 가기</button>;
};

export default BackButton;
