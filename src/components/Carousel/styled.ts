import styled from 'styled-components';

const CarouselWrapper = styled.div`
  .carousel {
    overflow: hidden;
    width: 720px;
    display: flex;
    flex-direction: column;
    height: 160px;
    background-color: #f5f5f5;
    position: relative;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .carousel-item {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 160px;
    width: 720px;

    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
  }

  .active {
    opacity: 1;
    transform: scale(1.01);
    transition-duration: 3s;
    z-index: 999;
    border-radius: 20px;
    background-color: #f5f5f5;
  }

  .list {
    width: 180px;
    height: 100%;
    background-color: aliceblue;
    border: 1px solid red;
    display: flex;
    justify-content: center;
  }
  .Item {
    margin-top: 10px;
    background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat 0px -570px;
    width: 118px;
    height: 100px;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    z-index: 9999;
  }
  .left {
    left: 10px;
  }
  .right {
    right: -232px;
  }
  .span {
    width: 100px;
    height: 50px;

    padding-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .top {
    flex: 1;

    align-items: center;
  }
  .top_span {
    overflow: hidden; /* 超出一行文字自动隐藏 */
    text-overflow: ellipsis; /*文字隐藏后添加省略号*/
    white-space: nowrap; /*强制不换行*/
    font-size: 10px;
    display: block;
    padding: 1px;
    color: black;
    cursor: pointer;
  }

  .top_span:hover{
       text-decoration: dashed;
  }
  .bottom {
    flex: 1;

  }
`;

export default CarouselWrapper;
