import styled from "@emotion/styled"



export const BlockTextHeading = styled.p`

width: 465px;
height: 80px;
font-family: Trirong;
font-size: 36px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.11;
letter-spacing: normal;
color: #01565b;


`


export const DasSindSection = styled.div`
display:flex;

@media (max-width: 375px){
display:flex;
flex-direction:column;

}


`
export const Block = styled.div`
float:left;
width:50%;
height:461px;
background-color: #f2cfb8;
position:relative;
top:-58px;
padding:38px;
@media (max-width: 375px){
    width: 317px;
  height: 442px;
  margin-left:30px;
  padding:10px;
    
    }
  
`
export const DasImage = styled.img`
float:left;
width:50%;
width: 721px;
height: 461px;
position:relative;
top:-58px;
@media (max-width: 375px){
width:375px;

}
  
`

export const BlockText = styled.p`
width: 462px;
  height: 265px;
  font-family: Rubik;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: #01565b;
  position:relative;
  top:${props => props.Description ? "-240px" : "-30px"};
  @media (max-width: 375px){
    width: 272px;
  height: 383px;
  font-family: Rubik;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  color: #01565b;
  position:relative;
  top:${props => props.Description ? "-390px" : "-30px"}


  }



`