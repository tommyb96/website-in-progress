import logo from "../src/svg/logo.svg";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import telefon from "../src/svg/Telefon.png";
import mail from "../src/svg/Mail.png";
import kreis3 from "../src/svg/DreiKreise.svg";
import kreis2 from "../src/svg/ZweiKreise.svg";
import kreis1 from "../src/svg/Kreis.svg";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BackgroundCircles
          src={kreis3}
          alt="Hintergrund Kreise"
        ></BackgroundCircles>
        <TwoCircles src={kreis2} alt="Hintergrund Kreise"></TwoCircles>
        <Circle src={kreis1} alt="Hintergrund Kreise"></Circle>
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
          <StyledP>
            <img src={mail} alt="Telefon" width="43px"></img>&nbsp;&nbsp;{" "}
            info@modernmindrecruitment.com
          </StyledP>
          <StyledP style={{ fontSize: "16px" }}>
            <img src={telefon} alt="Telefon" width="45px"></img>&nbsp;&nbsp;+49
            152 0211 21 64
          </StyledP>
        </Kontaktdaten>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundCircles = styled.img`
  position: absolute;
  top: -50px;
  right: -100px;
  z-index: -1;
  width: 1100px;
  @media (max-width: 1200px) {
    width: 1000px;
    right: -200px;
  }
  @media (max-width: 1007px) {
    display: none;
  }
`;

const TwoCircles = styled.img`
  position: absolute;
  top: 100px;
  left: -30px;
  width: 80vw;
  z-index: -1;
  @media (min-width: 1008px) {
    display: none;
  }
`;

const Circle = styled.img`
  position: absolute;
  right: -80px;
  bottom: -50px;
  width: 80vw;
  z-index: -1;
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
  color: rgb(0, 167, 155);
  font-size: 40px;
  padding: 120px 20px 120px 140px;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 80px 30px 80px 85px;
    font-size: 30px;
  }
`;

const Span = styled.span`
  color: rgb(0, 0, 255);
`;

const ErsterAbsatz = styled.div`
  padding: 10px 13vw 10px 13vw;
  max-width: 620px;
  font-size: 27px;
  font-family: futura-pt, sans-serif;
  font-weight: 500;
  font-style: normal;
`;
const StyledSpan = styled.span`
  font-family: "Righteous", cursive;
  color: rgb(0, 0, 255);
`;

const ZweiterAbsatz = styled.div`
  font-size: 20px;
  max-width: 620px;
  padding: 10px 13vw 10px 13vw;
`;

const DritterAbsatz = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  max-width: 620px;
  padding: 10px 13vw 10px 13vw;
`;

const Kontaktdaten = styled.div`
  font-size: 18px;
  max-width: 620px;
  padding: 10px 13vw 10px 11vw;

  @media (max-width: 640px) {
    padding: 10px 13vw 10px 8vw;
  }
`;

const StyledP = styled.p`
  display: flex;
  align-items: center;
`;
