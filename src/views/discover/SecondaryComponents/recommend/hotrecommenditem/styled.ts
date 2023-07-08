import styled from 'styled-components';

const HotRecommendItemWrapper = styled.div`
  width: 140px;
  height: 140px;
  background-color: aliceblue;
  position: relative;
  .Div_Image {
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 10px;
    overflow: hidden;

  }
  .Image {
    width: 100%;
    height: 100%;
  }
  .icon{
    width: 100%;
    height: 20px;
    border-radius: 5px;
    position: relative;
    left: 0px;
    bottom: 20px;
    overflow: hidden;
  }
  .shadow {
    position: absolute;
    background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat 0 -537px;
    left: 0px;
    bottom: 0px;
    width: 100%;

    z-index: 99;
    height: 27px;


  }

  .headset{
    background: url(${require('@/assets/img/iconall.png')}) no-repeat 0 -24px;
   	width: 14px;
	  height: 18px;
    position: absolute;
    left: 10px;
    top: 4px;

  }

.play{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 0px;
  text-align: center;
  line-height: 20px;
  color: white;


}
.Outlined{
  cursor: pointer;
}
.count{
   position: absolute;
   left: 40px;
   top: 0px;
}
.playCount{
  color: #CCCCCC;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}

`;
export default HotRecommendItemWrapper;
