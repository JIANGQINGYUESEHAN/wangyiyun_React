import styled from 'styled-components';
const BannersWrapper = styled.div`
  .content {
    height: 500px;
    width: 100%vw;
    background-color: aliceblue;
    margin: 30px auto;
    position: relative;
  }
  .slider {
    height: 400px;
    display: flex;
    justify-content: center;
  }
  .image {
    width: 800px;
    height: 400px;
    border-radius: 10px;
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
    z-index: 9999;
    top: 50%;
    transform: translateX(-50%);
  }
  .arrow_left {
    left: 425px;
  }
  .arrow_right {
    right: 390px;
  }
  .arrow:active {
    background-color: #282c34;
  }
  .arrow:hover {
    background-color: #282c34;
  }

  .slide {
    opacity: 0;
    transition-duration: 2s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 2s;
    transform: scale(1.1);
  }
`;

export default BannersWrapper;
