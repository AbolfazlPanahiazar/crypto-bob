import { FC, ReactElement } from "react";

import BobCard from "../BobCard/BobCard";

interface IBobListProps {
  cards: any[];
}

const BobList: FC<IBobListProps> = ({ cards }): ReactElement => {
  return (
    <div
      style={{
        width: "100%",
        whiteSpace: "nowrap",
        overflowX: "scroll",
        scrollbarWidth: "none",
      }}
    >
      {cards.map((i) => (
        <BobCard
          image={i.image_preview_url}
          title={i.name}
          price={i.traits[0].value}
        />
      ))}
    </div>
  );
};

export default BobList;
