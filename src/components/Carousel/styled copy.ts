import styled from "styled-components";

const CarouselWrapper = styled.div`
.carousel{
  width: 100%;
  height: 160px;

  display: flex;

}
.arrow{

  width: 20px;
  height: 100%;

  color: red;

}
.ul{

  width: 675px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;

  background-color: bisque;


}
.Item_list{
  width: 675px;
  height: 100%;

  z-index: 999;

}
.activea {
    opacity: 1;
    transition-duration: 3s;

  }

.list{
  flex: 1;
  height: 100%;
  background-color: aliceblue;
  border: 1px solid red;
  display: flex;
  justify-content: center;


}
.Item{
  margin-top: 10px;
  background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat 0px -570px;
  width: 118px;
  height: 100px;

}

`

export default CarouselWrapper
