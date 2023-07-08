import styled from 'styled-components';

let RcContentWrapper = styled.div`
  > .content {
    margin: 0 auto;
    width: 880px;

    display: flex;
    border: 1px solid red;
  }
  .left {
    width: 720px;
  }
  .HotRecommendbody {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
  }
  .item_rec {
    width: 180px;
    height: 200px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }
  .content_bottom {
    width: 100%;
    height: 40px;
  }

  .right {
    width: 260px;
  }
  .itemName {
    text-decoration: none;
    font-size: 12px;
  }
  .Span {
    width: 140px;
    height: 30px;
    margin: 10px 20px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .Span:hover {
    color: #CCCC;
  }
`;

export default RcContentWrapper;
