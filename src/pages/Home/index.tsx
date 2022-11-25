import { Header } from "../../components/Header";
import { HomeHeader } from "./components/HomeHeader";
import { HomeBody } from "./components/HomeBody";
import { GeneralContainer } from "./styles";

export function HomePage() {
  return (
    <>
      <GeneralContainer>
        <Header />
      </GeneralContainer>
      <HomeHeader />
      <GeneralContainer>
        <HomeBody />
      </GeneralContainer>
    </>
  );
}
