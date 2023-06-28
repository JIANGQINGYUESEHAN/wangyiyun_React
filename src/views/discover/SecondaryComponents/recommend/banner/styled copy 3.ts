import styled from 'styled-components';
const BannersWrapper = styled.div`
  .content {
    height: 300px;
    background-color: aliceblue;
    bottom: 20px 0px;
    overflow: hidden;
  }

  .ul {
    margin: 10px auto;
    height: 300px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    background-color: rebeccapurple;
    overflow: hidden;
    position: relative;
  }

  .list {
    flex-shrink: 0;
    width: 400px;
    height: 280px;
    border: 1px solid black;

  //  transform: translateX(-1600px);


  }
.image{
    width: 400px;
    height: 280px;
}


`;

export default BannersWrapper;
