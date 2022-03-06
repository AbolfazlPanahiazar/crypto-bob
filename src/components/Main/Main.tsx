import { FC, ReactElement } from "react";
import { SiEthereum } from "react-icons/si";

import { Image, MainWrapper, Owner, Title, Price } from "./main.styles";

interface IMainProps {
  image: string;
  title: string;
  price: number;
  owner: string;
}

const Main: FC<IMainProps> = ({ image, title, price, owner }): ReactElement => {
  return (
    <MainWrapper>
      <Image src={image} alt={title} />
      <div
        style={{
          height: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          paddingLeft: 20,
        }}
      >
        <Title>{title}</Title>
        <Price>
          Price: {price}
          <SiEthereum />
        </Price>
        <Owner>Owner Address: {owner}</Owner>
      </div>
    </MainWrapper>
  );
};

export default Main;
