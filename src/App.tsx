import { FC } from "react";

import Header from "./components/Header/Header";
import { App, Container } from "./app.styles";

const Application: FC = () => {
  return (
    <App>
      <Container>
        <Header />
      </Container>
    </App>
  );
};

export default Application;
