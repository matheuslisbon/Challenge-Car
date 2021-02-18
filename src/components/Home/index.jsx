import HomeContainer from "./styled";

export default function Home() {
  return (
    <HomeContainer>
      <div className="home-container">
        <div className="home-content">
          <h1>Logo</h1>

          <form action="">
            <div className="form-model">
              <span>Buscar Modelo ou Marca</span>
              <input className="text" type="text" />
            </div>

            <div className="form-model">
              <span>Valor em R$ </span>
              <input className="money-value" type="number" placeholder="R$ " />
            </div>

            <span>Ano de Fabricação </span>
            <div className="date-input">
              <input type="date" />
              <input type="date" />
            </div>

            <button>Procurar</button>
          </form>
        </div>

        <div className="background-home">
          <img
            src="https://image.freepik.com/vetores-gratis/pelo-meu-conceito-de-ilustracao-de-carro_114360-831.jpg"
            alt=""
          />
        </div>
      </div>
    </HomeContainer>
  );
}
