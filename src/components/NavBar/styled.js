import styled from 'styled-components'

const NavBarContainer = styled.div`
  background: #192DA1;
  color:white;
  position:fixed;
  width: 100%;
  z-index: 999;
  animation: slidein 1s ease;
  div.nav-bar-content{
    width: 80%;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 2px;
  }

  @keyframes slidein {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  h1.logo{
    font-style: italic;
    font-size: 38px;
    cursor: pointer;
  }

  ul{
    display:flex;
    justify-content:center;
    align-items:center;
  }

  ul li{
    padding:3px 12px;
    margin:9px 18px;
    font-weight: bold;
    cursor: pointer;
    font-size: 15.5px;
    border-radius: 8px;
    transition: 0.3s;
  }

  ul li:hover{
    background: white;
    color: #192DA1;
    border-radius: 8px;
  }

  .active{
    color: #FE6A2C;
  }
  @media(max-width:1000px){
    ul{
      display: none;
    }
  }
`
export default NavBarContainer