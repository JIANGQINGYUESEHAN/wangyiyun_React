import styled from 'styled-components';

const HeaderWrapper = styled.div`
  .content {
    height: 70px;
    background-color: ${(props) => props.theme.color.primary};
    border-bottom: 1px solid #000;
    padding: 0 300px;
    display: flex;
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
    width: 60px; /* 设置固定宽度 */
    line-height: 70px;
    height: 70px;
    padding:0px 10px; /* 设置间隔 */
   /* 可选：添加边框样式 */
   text-decoration:none

  }
.triangle{
  z-index: 999;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid red;
}

  .active{
    background-color: #000000;
    color: #ffffff;

    /* background-image: url(${require('@/assets/img/sprite_01.png')});
    background-position: 781px -84px; */

  }
`;
export default HeaderWrapper;
