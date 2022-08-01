import { useEffect } from "react";
import { Button } from "src/components";
import { useStateContext } from "src/context/countContext";
type ProductSettingsProps = {
  name: string;
  price: string | number;
};

export default function ProductSettings({ name, price }: ProductSettingsProps) {
  const { onAddtoCart, quantity, setQuantity } = useStateContext()!;
  useEffect(() => {
    if (quantity) {
      setQuantity(1);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const product = {
    name: name,
    price: price,
  };

  return (
    <div className="md:w-5/12 flex justify-center items-center md:h-maximalHeight flex-col h-halfHeight ">
      <div className="w-11/12   flex flex-col">
        <h1 className="text-primary text-4xl md:text-5xl font-medium py-3 lg:text-6xl w-5/6 m-auto mb-4">
          {name}
        </h1>
        <p className="text-3xl font-medium md:text-4xl lg:text-5xl dark:text-white mb-4 w-5/6 m-auto">
          ${price}
        </p>
      </div>
      <div className="w-11/12 ">
        <div className="w-10/12 m-auto">
          <Button
            className="left-0 my-3  font-extrabold bg-primary  p-1 text-white  w-3/5 sm:w-2/5 font-AlbertSans "
            handleClick={() => onAddtoCart(product)}
          >
            ADD TO CART
          </Button>
        </div>
      </div>

      <div className="flex"></div>
    </div>
  );
}
