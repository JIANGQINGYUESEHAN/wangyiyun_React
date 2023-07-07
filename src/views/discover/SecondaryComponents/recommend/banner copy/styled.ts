import styled from 'styled-components';
const BannersWrapper = styled.div`
  .content {
    width: 500px;
    height: 400px;
    background-color: aliceblue;
    padding: 10px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }
  .banners {
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: flex-start; /* 左对齐 */
    align-items: center; /* 垂直居中 */
    position: absolute;
    height: 350px;
    background-color: antiquewhite;
    border: 1px solid gray;
  }
  .list {
    width: 500px;
    height: 350px;
    background-color: red;
    flex-shrink: 0;
  }
  .image{
    width: 500px;
    height:350px;
}

`;

export default BannersWrapper;
