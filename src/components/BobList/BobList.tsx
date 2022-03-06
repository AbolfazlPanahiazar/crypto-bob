import { FC, ReactElement } from "react";

import BobCard from "../BobCard/BobCard";

interface IBobListProps {
  cards: any[];
  onCardClick: (i: number) => void;
}

const BobList: FC<IBobListProps> = ({ cards, onCardClick }): ReactElement => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {cards.map((i, index) => (
        <BobCard
          key={i.image_preview_url}
          index={index}
          onCardClick={onCardClick}
          image={i.image_preview_url}
          title={i.name}
          price={i.traits[0].value}
        />
      ))}
    </div>
  );
};

export default BobList;
