import styled from 'styled-components';
const BannersWrapper = styled.div`
.main{

  margin: 40px auto;
  background-color: aliceblue;
  height: 300px;
}
.ul{
 display: flex;
 justify-content: space-around;
}
.list{
  margin: 20px 0px;
  float: left;
  width: 500px;
  height: 240px;
  border: 1px solid black;
  z-index: 1;

}

@keyframes move {
  0% {
    transform: translateX(0) scale(1);
    z-index: 1;
  }
  50% {
    transform: translateX(-50px) scale(1.3);
    z-index: 2;
  }
  100% {

  }
}
li:nth-child(2){
  background-color: red;
  width: 500px;
  height: 240px;
  z-index: 2;
  transform: scale(1.3);

}

.imag{
  width: 500px;
  height: 240px;
}



`
export default BannersWrapper
