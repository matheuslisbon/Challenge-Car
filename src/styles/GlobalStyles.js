import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    
  }
  html{
    background:	rgb(225, 225, 225);
    font-size: 87%;
  }
  li, a, button, input{
    list-style:none;
    text-decoration:none;
    outline: 0;
  }
  ::-webkit-input-placeholder {
   color: #F2F2F2CC;
}


`