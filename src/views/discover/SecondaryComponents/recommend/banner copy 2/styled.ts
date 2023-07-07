import styled from 'styled-components';
const BannersWrapper = styled.div`
  .content {
    height: 400px;
    width: 1400px;
    background-color: aliceblue;
    margin: 30px auto;
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }
.image_div{
  height: 400px;
  display: flex;
  border-radius: 10px;
  justify-content: center;


}
.image {
  width: 800px;
    height: 100%;
    border-radius: 10px;
  }
.slide{
    width: 100%;
    height: 100%;
    opacity: 0;
    transition-duration: 2s ease;
}
.slide.active {
    opacity: 1;
    transition-duration: 2s;
    transform: scale(1.1);
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
    left: 175px;
  }
  .arrow_right {
    right: 135px;
  }
  .arrow:active {
    background-color: #282c34;
  }
  .arrow:hover {
    background-color: #282c34;
  }


`;

export default BannersWrapper;
