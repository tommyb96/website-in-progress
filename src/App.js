import logo from "../src/svg/logo.svg";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Logo src={logo} alt="Logo" />
      <CompanyName>
        <span style={{ color: "rgb(0, 0, 255)", fontSize: "35px" }}>
          modern mind
        </span>{" "}
        recruitment
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
        jahrelanger Erfahrung im Bereich Fachkräftegewinnung aus dem Ausland und
        vermittelt Ihnen alle notwendigen Informationen sowie Tipps und Tricks
        für maximalen Erfolg.
      </ZweiterAbsatz>
    </>
  );
}

export default App;

const Logo = styled.img`
  width: 150px;
  margin: 25px;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const CompanyName = styled.div`
  font-family: "Comfortaa", cursive;
  color: rgb(0, 167, 155);
  font-size: 30px;
`;

const ErsterAbsatz = styled.div`
  padding: 10px 10vw 10px 10vw;
  max-width: 500px;
  font-size: 23px;
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
  max-width: 500px;
  padding: 10px 10vw 10px 10vw;
`;
