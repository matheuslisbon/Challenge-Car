import styled from 'styled-components'

const NavBarContainer = styled.div`
  background: #192DA1;
  color:white;
  position:fixed;
  width: 100%;
  div.nav-bar-content{
    width: 80%;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 2px;
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
    padding: 12px;
    margin:0 10px;
    font-weight: bold;
    cursor: pointer;
    font-size: 15.5px;
  }
  .active{
    color: #FE6A2C;
  }
  @media(max-width:900px){
    ul{
      display: none;
    }
  }
`
export default NavBarContainer