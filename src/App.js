import logo from "../src/svg/logo.svg";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import telefon from "../src/svg/Telefon.svg";
import mail from "../src/svg/Mail.svg";
import kreis3 from "../src/svg/DreiKreise.svg";
import kreis2 from "../src/svg/ZweiKreise.svg";
import shadow from "../src/svg/Shadow.png";

function App() {
  return (
    <>
      <GlobalStyles />
      <Shadow src={shadow} alt="Hintergrund Schatten"></Shadow>
      <BackgroundCircles
        src={kreis3}
        alt="Hintergrund Kreise"
      ></BackgroundCircles>

      <Wrapper>
        <TwoCircles src={kreis2} alt="Hintergrund Kreise"></TwoCircles>
        <Logo src={logo} alt="Logo" />
        <CompanyName>
          <Span>modern mind</Span> recruitment
        </CompanyName>
        <ErsterAbsatz>
          Sind Sie auf der Suche nach qualifizierten{" "}
          <StyledSpan>Mitarbeitern</StyledSpan> aus dem Ausland, um Ihre offenen
          Stellen erfolgreich zu besetzen?
        </ErsterAbsatz>
        <ZweiterAbsatz>
          {" "}
          Dann sind Sie bei uns genau richtig! Unser erfahrenes Team arbeitet
          derzeit intensiv an einem Workshop zur Gewinnung internationaler
          Fachkräfte mit Fokus auf Drittstaaten. Dieser Workshop basiert auf
          jahrelanger Erfahrung im Bereich Fachkräftegewinnung aus dem Ausland
          und vermittelt Ihnen alle notwendigen Informationen sowie Tipps und
          Tricks für maximalen Erfolg.
        </ZweiterAbsatz>
        <DritterAbsatz>
          Bei Interesse melden Sie sich vorerst unter:
        </DritterAbsatz>
        <Kontaktdaten>
          <a href="mailto:info@modernmindrecruitment.com">
            <img src={mail} alt="Telefon" width="70vw"></img>
          </a>{" "}
          <a href="tel:+4915202112164">
            <img src={telefon} alt="Telefon" width="70vw"></img>
          </a>
        </Kontaktdaten>
        <CompanyNameMobile>
          <Span>modern mind</Span> recruitment
        </CompanyNameMobile>
      </Wrapper>
    </>
  );
}

export default App;

const Shadow = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const BackgroundCircles = styled.img`
  position: absolute;
  top: 90px;
  right: 0;
  z-index: -1;
  width: 50vw;
  opacity: 0.4;
  @media (max-width: 1200px) {
    width: 53vw;
  }
  @media (max-width: 1007px) {
    display: none;
  }
`;

const TwoCircles = styled.img`
  position: absolute;
  top: 50px;
  right: -30px;
  width: 70vw;
  z-index: -1;
  opacity: 0.4;
  @media (min-width: 1008px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 150px;
  margin: 25px;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const CompanyName = styled.div`
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  color: rgb(0, 167, 155);
  font-size: 40px;
  padding: 120px 20px 120px 140px;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 80px 30px 80px 85px;
    font-size: 30px;
  }

  @media (max-width: 568px) {
    display: none;
  }
`;

const Span = styled.span`
  color: rgb(0, 0, 255);
`;

const ErsterAbsatz = styled.div`
  padding: 10px 13vw 30px 13vw;
  max-width: 620px;
  font-size: 27px;
  font-family: futura-pt, sans-serif;
  font-weight: 500;
  font-style: normal;
  @media (max-width: 568px) {
    padding: 190px 13vw 10px 13vw;
  }
`;
const StyledSpan = styled.span`
  font-family: "Righteous", cursive;
  color: rgb(0, 0, 255);
`;

const ZweiterAbsatz = styled.div`
  font-size: 20px;
  max-width: 620px;
  padding: 10px 13vw 30px 13vw;
`;

const DritterAbsatz = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  max-width: 620px;
  padding: 10px 13vw 30px 13vw;
`;

const Kontaktdaten = styled.div`
  font-size: 18px;
  max-width: 620px;

  padding: 10px 13vw 10px;

  a {
    padding: 10px;
  }
  @media (max-width: 568px) {
    text-align: center;
  }
`;

const CompanyNameMobile = styled.div`
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  color: rgb(0, 167, 155);
  font-size: 22px;
  text-align: center;
  padding-bottom: 23px;
  padding-top: 5px;

  @media (min-width: 568px) {
    display: none;
  }
`;
