import path from "path";
// 파일을 비동기적으로 읽어올 때는 fs/promises를 사용함.
import { promises as fs } from "fs";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
};

export async function getProducts(): Promise<ProductType[]> {
  // 파일의 경로를 만들어줌.
  const filePath = path.join(process.cwd(), "data", "products.json");
  // https://nodejs.org/docs/latest/api/fs.html#file-system
  // 파일을 읽어옴.
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<ProductType | undefined> {
  const products = await getProducts();
  const targetProduct = products.find((product) => product.id === id);
  return targetProduct;
}
