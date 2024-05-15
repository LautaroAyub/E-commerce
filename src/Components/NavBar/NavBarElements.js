import styled, { keyframes } from "styled-components"

export const Nav =styled.nav`
 position: fixed;
 height: 48px;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 8px 10px;
  background-color: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;

`;

export const NavBarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-size: medium;
font-weight:lighter;
/* border: 1px solid yellow; */
`
export const Menu=styled.ul`
position: absolute;
top: 50px;
left: ${({isMenuOpen}) => isMenuOpen? 0 :"-100%"};
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
align-items: start;
background-color: rgba(255,255,255,1);
transition: 0.5s all ease-in-out;
z-index: 2;

@media screen and (min-width:960px) {
height: 100%;
display:flex;
position: static;
background-color: transparent;
flex-direction:row;
justify-content: center;
align-items: center;
gap:1rem;
}
`


export const MenuItem=styled.li`
height: 10%;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
font-weight:medium;
margin-top:10px;
margin-left: 10px;
    /* &:hover{
background-color: #7ff2d6c2
} */
@media screen and (min-width: 960px) {

}
`
const disappear = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;
const appear= keyframes`
0%{
    opacity: 0;
    transform: translateY(100%);
}
100%{
    opacity: 1;
    transform: translateY(0);
}`


export const MenuCategory=styled.ul`
background-color: rgba(156, 163, 175, .5);
border-radius:10px;
display: flex;
flex-direction: column;
align-items: start;
position:absolute ;
top: 370px;
left: ${ ({categoriesIsOpen})=>categoriesIsOpen? "0":"-80px"};
animation:${ ({categoriesIsOpen})=> categoriesIsOpen? appear: disappear} 0.5s forwards ;


@media screen and (min-width:960px) {
height: 100%;
display:flex;
position: static;
background-color: transparent;
flex-direction:row;
justify-content: center;
align-items: center;
gap:1rem;
animation:${appear} 0.5s forwards ;
}
`



export const IconMobileMenu=styled.div`
display: flex;
@media screen and ( min-width:960px){
    display: none;
}
`


