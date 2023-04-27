import logo from "../src/svg/logo.svg";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Logo src={logo} alt="Logo" />
    </>
  );
}

export default App;

const Logo = styled.img`
  width: 150px;
  margin: 25px;
`;
