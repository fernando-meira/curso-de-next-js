import { GetStaticProps } from "next";
import { Title } from "../styles/pages/Home";

interface IProducts {
  id: number;
  title: string;
}

interface ITop10Props {
  products: IProducts[];
}

export default function Top10({ products }: ITop10Props) {
  return (
    <div>
      <Title>Top10</Title>

      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ITop10Props> = async () => {
  const response = await fetch("http://localhost:3333/products");
  const products = await response.json();

  return {
    props: {
      products,
    }
  }
}