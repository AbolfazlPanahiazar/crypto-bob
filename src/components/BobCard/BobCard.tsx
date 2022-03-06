import { FC, ReactElement } from "react";
import { SiEthereum } from "react-icons/si";

import { CardWrapper, CardImage, Title, Price } from "./bobCard.styles";

interface IBobCardProps {
  title: string;
  price: number;
  image: string;
}

const BobCard: FC<IBobCardProps> = ({ image, title, price }): ReactElement => {
  return (
    <CardWrapper>
      <CardImage src={image} alt={title} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Title>{title}</Title>
        <Price>
          {price}
          <SiEthereum />
        </Price>
      </div>
    </CardWrapper>
  );
};

export default BobCard;
