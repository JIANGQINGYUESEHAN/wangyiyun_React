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
    position: relative;
  }
.image_div{
  height: 400px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

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
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color:gray;
    opacity: 0.9;
    z-index: 999;
    cursor: pointer;
    margin: 0 10px;
    display: block;
  }

  .active{
    background-color:red;
  }
  .dot:hover{
    background-color: black;
  }
  .dotUl {
    position: absolute;
    left: 1155px;
    top: 370px;
    display: flex;
    width: 300px;
    height: 15px;
  }


`;

export default BannersWrapper;
