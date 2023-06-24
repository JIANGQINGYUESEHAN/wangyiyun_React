import styled from 'styled-components';

const HeaderWrapper = styled.div`
  .content {
    height: 70px;
    background-color: ${(props) => props.theme.color.primary};
    border-bottom: 1px solid #000;
    padding: 0 240px;
    display: flex;
    box-sizing: border-box;
    position: relative;
  }
  .left {
    height: 70px;
    width: 170px;
    padding: 0px 20px 0px 0px;
    background: url(${require('@/assets/img/sprite_01.png')}) no-repeat 0px 0px;
  }
  .middle {
    display: flex;
  }

  .Link {
    position: relative;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    color: #ffffff;
    width: 70px; /* 设置固定宽度 */
    line-height: 70px;
    height: 70px;
    padding: 0px 10px; /* 设置间隔 */
    /* 可选：添加边框样式 */
    text-decoration: none;
  }
  .Link:hover {
    /* 鼠标悬停时的样式 */
    background-color: #282c34;
  }
  .triangle {
    z-index: 999;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #CE180D;
  }

  .Active {
    background-color: #000000;
    color: #ffffff;

    /* background-image: url(${require('@/assets/img/sprite_01.png')});
    background-position: 781px -84px; */
  }
  .right {
    display: flex;
    padding: 20px 10px;
  }
  .development_center {
    margin: 0 15px;
    width: 150px;
    border: 1px solid grey;
    height: 32px;

    font-size: 12px;
    text-align: center;
    line-height: 32px;
    border-radius: 20px;
  }
  .development_center:hover {
    border: 1px solid #ffffff;
  }
  .center_a {
    color: #ffffff;
    text-decoration: none;
  }
  .avatar {
    border: 1px solid #ffffff;
    width: 48px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
  .avatar_imag {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
  .other {
    width: 160px;

    background-color: #353535;
    position: absolute;
    right: 200px;
    top: 53px;

  }
  .ul{
    margin: 10px 0px ;
  }
  .list {
    display: block;

    text-align: center;
    width: 100%;
    height: 40px;
    background-color: #353535;
    line-height: 40px;
  }
  .list:hover{
    background-color:#282C34 ;
    border-bottom: 1px solid black;
  }
  .listOther {
    color: #ffffff;
    font-size: 14px;
  }
  .diver{
  height: 4px;
  background-color: #C8130C;
}
`;
export default HeaderWrapper;
