import styled from 'styled-components';
const BannersWrapper = styled.div`
.ul{
  display: flex;
  justify-content: space-around;
  margin: 37px 30px;
}
.list{
  float: left;
  width: 800px;
  height: 240px;
  background-color: aliceblue;
  border: 1px solid red;
  margin: 0 auto;
  z-index: 9999;
  background-color: red;
  transform: scale(1.3);
}
.list1{
  float: left;
  width: 800px;
  height: 240px;
  background-color: aliceblue;
  border: 1px solid red;
  margin: 0 auto;
  z-index: 1;
}

.list_div{
  width: 800px;
  height: 300px;
  background-color: aliceblue;
  border: 1px solid red;
}
.imag{
  width: 800px;
  height: 240px;
}
`
export default BannersWrapper
