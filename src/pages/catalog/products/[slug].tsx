import dinamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

const AddToCartModal = dinamic(
  () => import("@/components/AddToCartModal"),
  { loading: () => <p>Loading...</p> }
)

export default function Product() {
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddToCart = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [])

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to cart</button>

      {modalIsOpen && <AddToCartModal />}
    </div>
  );
};