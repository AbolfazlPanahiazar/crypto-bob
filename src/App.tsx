import { FC, useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BobList from "./components/BobList/BobList";
import { App, Container } from "./app.styles";

const Application: FC = () => {
  const [records, setRecords] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>({
    image_preview_url: "",
    name: "",
    traits: [{ value: 100 }],
    owner: {
      address: "",
    },
  });

  useEffect(() => {
    const getRecords = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x5Eec0802561561De1B5Ba2af6bABfd2347b7C569&order_direction=asc"
      );
      setRecords(openseaData.data.assets);
      setSelected(openseaData.data.assets[0]);
    };
    getRecords();
  }, []);

  const onCardClick = (index: number) => {
    setSelected(records[index]);
  };

  return (
    <App>
      <Container>
        <Header />
        <Main
          image={selected.image_preview_url}
          owner={selected.owner.address}
          title={selected.name}
          price={selected.traits[0].value}
        />
        <BobList cards={records} onCardClick={onCardClick}  />
      </Container>
    </App>
  );
};

export default Application;
