import NavBarContainer from "./styled";
import { CgUser } from "react-icons/cg";

export default function NavBar() {
  return (
    <NavBarContainer>
      <div className="nav-bar-content">
        <h1 className="logo">LOGO</h1>
        <ul>
          <li className="active">Comprar</li>
          <li>Zero Km</li>
          <li>Venda Express</li>
          <li>Avaliar</li>
          <li>Trabalhe Conosco</li>
          <p>
            <CgUser
              size={"30px"}
              style={{
                color: "#FE6A2C",background: "white",
                borderRadius: "50%", cursor: "pointer", }}
            />
          </p>
        </ul>
      </div>
    </NavBarContainer>
  );
}
