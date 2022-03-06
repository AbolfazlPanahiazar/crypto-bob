import { FC, useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import BobList from "./components/BobList/BobList";
import { App, Container } from "./app.styles";

const Application: FC = () => {
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    const getRecords = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x5Eec0802561561De1B5Ba2af6bABfd2347b7C569&order_direction=asc"
      );
      setRecords(openseaData.data.assets);
    };
    getRecords();
  }, []);

  return (
    <App>
      <Container>
        <Header />
        <BobList cards={records} />
      </Container>
    </App>
  );
};

export default Application;
