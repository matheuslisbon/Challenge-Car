import styled from 'styled-components'

const Cards = styled.div`
  div.cards-logo{
    display: flex;
    justify-content:center;
    margin-top: -30px;
  }
  div.cards-logo h1{
    background: #0554F2;
    padding: 14px;
    border-radius: 14px;
    color: white;
  }

  div.cards-home{
    padding: 20px 12px; 
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:12px 8px;
  }
  div.cards-content{
    background: white;
    border-radius: 6px;
    font-weight:500;
  }
  div.cards-content img{
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    height: 25vh;
  }
  div.cards-content ul li{
    color: #2E34A6;
    line-height: 1.5;
    margin-left: 6px;
  }
  div.cards-content .car-name{
    color: #808080;
    text-transform: uppercase;
    margin-left: 6px;
    padding: 3px 0;
  }
  div.cards-content .car-price{
    color: #F24607;
    font-size: 14.5px;
    font-weight:bold;
    min-width: 60px; 
  }
  div.cards-content .car-itens{
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-between;
    padding-right: 8px;
    margin-bottom: 9px;
  }
  div.cards-content span{
   color: #808080; 
   font-weight:bold;
   font-size: 19px;
  }
  .loading{
    padding-top: 94px;
    padding-bottom: 68px;
    font-size: 32px; 
  }
  
  @media(max-width: 1050px){
    div.cards-home{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media(max-width: 750px){
    div.cards-home{
      grid-template-columns: 1fr 1fr ;
    }
  }
  @media(max-width: 450px){
    div.cards-home{
      grid-template-columns: 1fr ;
    }
  }
`

export default Cards