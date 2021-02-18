import styled from 'styled-components'
const HomeContainer = styled.div`

  div.home-container{
    height: 110vh;
    display:flex;
    justify-content:space-between;
    background-color: white;
    width: 100%;
  }
  div.home-content{
    background: #0554F2;
    border-radius: 16px; 
    width: 100%;
    max-width: 550px;
    margin: 70px 50px 110px;
    padding: 20px;
    color: white;
  }
  div.home-content h1{
    font-style: italic;
    padding: 10px 0;
    font-size: 42px;
    border-bottom: 3px solid white;

  }
  div.home-content form{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-top: 30px;
    max-width: 350px;
    height: 350px; 
  } 

  div.home-content input{
    background: none;
    border: none;
    border-bottom: 3px solid white;
    color: white;
    margin:10px 0;
    padding-bottom: 5px;
    margin-left: 3px;
  }
  div.home-content .date-input{
    display: flex;
    justify-content: space-between;
  }
  div.home-content button{
    border: none;
    border-radius: 12px;
    font-weight:bold;
    color: #0554F2;
    height: 35px;
  }
  div.form-model{
    display:flex;
    flex-direction:column;
  }
  @media(max-width:1050px){
    div.background-home img{
      width: 450px;
    }
  }

  @media(max-width:750px){
    div.home-container{
      display: flex;
      flex-direction:column;
      align-items:center;
      height: max-content;
    }
    div.home-content{
      width: 90%;
      margin: 0 auto;
      margin-top: 65px;
    }
    div.background-home img{
      width: 100%;
    }
  }

`

export default HomeContainer