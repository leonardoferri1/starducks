import HeadImg from "../../../../assets/Imagem.svg";
import { GeneralContainer } from "../../styles";
import {
  BenefitsContainer,
  HomeHeaderContainer,
  HomeHeaderContent,
  HomeHeaderSubtitle,
  HomeHeaderTitle,
  IconContainer,
} from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export function HomeHeader() {
  return (
    <HomeHeaderContainer>
      <GeneralContainer>
        <HomeHeaderContent>
          <div>
            <section>
              <HomeHeaderTitle>
                Encontre o café perfeito para qualquer hora do dia
              </HomeHeaderTitle>
              <HomeHeaderSubtitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </HomeHeaderSubtitle>
            </section>
            <BenefitsContainer>
              <div>
                <IconContainer className="orange">
                  <ShoppingCart size={18} weight="fill" />
                </IconContainer>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <IconContainer className="grey">
                  <Package size={18} weight="fill" />
                </IconContainer>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <IconContainer className="yellow">
                  <Timer size={18} weight="fill" />
                </IconContainer>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <IconContainer className="purple">
                  <Coffee size={18} weight="fill" />
                </IconContainer>
                <p>O café chega fresquinho até você</p>
              </div>
            </BenefitsContainer>
          </div>
          <img src={HeadImg} />
        </HomeHeaderContent>
      </GeneralContainer>
    </HomeHeaderContainer>
  );
}
