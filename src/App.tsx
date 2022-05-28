import React from "react";

//components
import Main from "./components/main";
import Header from "./components/header";
import Section from "./components/section";
import Article from "./components/article";
import Footer from "./components/footer";

//
import lights from "./img/lights.svg";

function App() {
  return (
    <>
      <Main>
        <Header></Header>
        <Section></Section>
        <Article></Article>
        <div className="lights">
          <img src={lights} alt="background neon lights" />
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;
