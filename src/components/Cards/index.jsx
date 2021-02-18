import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./styled";

export default function Card() {
  // Data -> Recebe os dados e Armazena em um Array
  const [data, setData] = useState([]);
  // Loading -> Retorna uma Tela de Pré-Loading Enquanto os dados Estão Carregando
  const [loading, setLoading] = useState(true);

  //Faz uma Requisição Api, logo quando o component é Carregado
  useEffect(() => {
    async function getData() {
      await axios
        .get("http://api.autosim.mangotest.com/api/product/listAllActive")
        .then((res) => setData(res.data));
      // Retira o Pré-loading da tela
      setLoading(false);
    }
    getData();
  }, []);

  //Tela de Loading
  if (loading) {
    return (
      <Cards>
        <div className="cards-logo loading">
          <h1>Carregando...</h1>
        </div>
      </Cards>
    );
  }

  return (
    <Cards>
      <div className="cards-logo">
        <h1>Nossos Carros Disponíveis</h1>
      </div>
      <div className="cards-home">
        {data.map((car) => (
          <div className="cards-content">
            <img
              src="https://th.bing.com/th/id/R803a420f78c7337a77cea6266b633302?rik=VnFR9RaUU9Jybw&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fford_shelby_gt500_car-1920x1080.jpg&ehk=M549xR1Lg6vpfWG0Vkp4UWJDyY68IlBxkMwSrevNsJ4%3d&risl=&pid=ImgRaw"
              alt=""
            />
            <p className="car-name">{car.nameModel}</p>

            <div className="car-itens">
              <ul key={car.id}>
                <li className="car-info">
                  {car.yearModel} <span>|</span> Transmissão
                </li>
                <li className="car-info">
                  {car.fuel} <span>|</span> {car.km ? `${car.km}km` : "- km"}
                </li>
              </ul>
              <p className="car-price">R$ {car.price ? `${car.price}` : "-"}</p>
            </div>
          </div>
        ))}
      </div>
    </Cards>
  );
}
