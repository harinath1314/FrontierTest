import styled from "@emotion/styled"


export const CardSection = styled.div`
background-color: #e59f71;
display: block;
    width: 608px;
    height: 294px;
    background-color: #e59f71;
    float:right;
    position:absolute;
    top:578px;
    left:832px;
    margin-bottom:10px;
  
  @media (max-width: 375px) {
    position:absolute;
    top:215px;
    left:28px;
    display: block;
    width: 317px;
  height: 315px;
    background-color: #e59f71;
    padding-left:5px;
  }
`

export const MainImage = styled.img`

padding-bottom:200px;
@media (max-width: 375px){
    padding-bottom:335px
}


`

export const CardHeadingPrimary = styled.h1` 
 width: 350px;
height: 60px;
font-family: Trirong;
font-size: 36px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
color: #01565b; 
margin-left:52px;
margin-top:52px;



`
export const BlockText = styled.p`
width: 390px;
height: 21px;

margin-left:52px;
font-family: Rubik;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
color: ${props => props.color};
@media (max-width: 375px){
  //  width:95%;
   width: 286px;
   height: 21px;
   font-family: Rubik;
   font-size: 16px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.31;
   letter-spacing: normal;
   color: ${props => props.color};

}

`
