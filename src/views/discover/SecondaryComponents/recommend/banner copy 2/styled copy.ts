import styled from 'styled-components';
const BannersWrapper = styled.div`
  .content {
    height: 400px;
    width: 100%vw;
    background-color: aliceblue;
    position: relative;
  }
  .ul {
    margin: 40px auto;
    height: 400px;
    width: 1300px;
    background-color: aqua;
    display: flex;
    overflow: hidden;
  }
  .list {
    height: 200px;
    width: 440px;
    background-color: red;
    flex-shrink: 0;
    /* transform: translateX(-880px); */
    margin: 40px 0px;
    z-index: 0;
    transition: transform 3s ease;
  }

  .image {
    height: 200px;
    width: 440px;
  }
  .activee {
    z-index: 99;
    transform:  scale(1.4);
  }


  .arrow {
    background-color: white;
    opacity: 0.9;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  .arrow:active {
    background-color: #282c34;
  }
  .arrow_left {
    left: 208px;
    top: 120px;
  }
  .arrow_right {
    right: 208px;
    top: 120px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.9;
    z-index: 99;
    cursor: pointer;
    margin: 0 10px;
    display: block;
  }
  .dotUl {
    position: absolute;
    left: 730px;
    top: 260px;
    display: flex;
    width: 300px;
    height: 15px;
  }
`;

export default BannersWrapper;
