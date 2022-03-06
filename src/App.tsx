import { FC } from "react";

import Header from "./components/Header/Header";
import BobCard from "./components/BobCard/BobCard";
import { App, Container } from "./app.styles";

const Application: FC = () => {
  return (
    <App>
      <Container>
        <Header />
        <BobCard image="https://lh3.googleusercontent.com/wQD1YL6N4OdbFCY8T0M2Sj52S670hjMNYRwfOW8zy8FRcvVN0WYau-YQVwMmgoiQ5ySb3Pjt1OsfuYIrM6K3o9nWaNOrlz7iKnw9kw=w600" title="Test title" price={0.1} />
      </Container>
    </App>
  );
};

export default Application;
