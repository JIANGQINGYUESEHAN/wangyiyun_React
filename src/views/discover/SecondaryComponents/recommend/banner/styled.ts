import styled from 'styled-components';
const BannersWrapper = styled.div`
.main{

  margin:40px auto;
  background-color: aliceblue;
  height: 360px;
  width: 1504px;

  overflow: hidden;
}
.ul{
  margin: 60px 0;
 display: flex;
 transform: translateX(-1000px);



}
.list{
  flex-shrink: 0;
  width: 500px;
  height: 240px;
  border: 1px solid black;
  border-radius: 20px ;
  overflow: hidden;
}
.list:nth-child(4){
  border: 1px solid red;
  transform: scale(1.3);
  z-index: 99;
}
.active{
  border: 1px solid red;
  transform: scale(1.3);
  z-index: 99;
}

.image{
  width: 500px;
  height: 240px;
}



`
export default BannersWrapper
