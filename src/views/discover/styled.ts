import styled from 'styled-components';
const DiscoverWrapper = styled.div`
.discover{
  padding: 0px 450px;
  text-align: center;
  display: flex;
  background-color:#CE180D;
}
.Link{
  height: 30px;
  line-height: 30px;
  width: 100px;
  display: inline-block;
  margin: 0 20px;
  text-align: center;
  font-size: 14px;

  color: #FFFF;
}

.active{
  background-color: black;
  z-index: 999;
  opacity: 0.4;
  border-radius: 40px;
  color: #FFFF;
}
.Link:hover{
  background-color: black;
  z-index: 999;
  opacity: 0.4;
  border-radius: 40px;
}
`
export default DiscoverWrapper
