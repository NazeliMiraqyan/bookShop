import { useAppSelector } from "../redux/store";
import styled from "styled-components";
import { useMemo } from "react";

const TotalPrice: React.FC = () => {
  const { cart } = useAppSelector((state) => state.data);
  const total = useMemo(() => {
    return cart.reduce((acc, c) => acc + c.price * c.qty, 0);
  }, [cart]);

  const Div = styled.div`
    text-align: center;
  `;
  return (
    <Div>{cart.length > 0 ? <h2> Total Price is {total} $</h2> : null}</Div>
  );
};
export default TotalPrice;
