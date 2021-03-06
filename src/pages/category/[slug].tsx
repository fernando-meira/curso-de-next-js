import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Title } from "@/styles/pages/Home";

interface IProducts {
  id: number;
  title: string;
}

interface ICategoryProps {
  products: IProducts[];
}

export default function Category({ products }: ICategoryProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <Title>Carregando...</Title>
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3333/categories");
  const categories = await response.json();

  const paths = categories.map(category => {
    return {
      params: { slug: category.id }
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ICategoryProps> = async (context) => {
  const { slug } = context.params

  const response = await fetch(`http://localhost:3333/products?category_id=${slug}`)
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}