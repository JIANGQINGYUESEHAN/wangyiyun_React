import styled from 'styled-components';

let AreaHeaderWrapper = styled.div`
  > .content {
    margin-top: 10px;
    height: 40px;
    width: 720px;
    padding: 20px;
    display: flex;
    border-bottom: 2px solid #c7130c;
  }
  .dot {
    display: flex;
    align-items: center;
  }
  .big {
    width: 20px;
    height: 20px;
    background-color: #c7130c;
    border-radius: 50%;
    position: relative;
  }
  .small {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .rec {
    margin: 0px 10px;
  }
  .sp {
    font-size: 20px;
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    cursor: pointer;
  }
  .keyword {
    display: flex;
    align-items: center;
    position: relative;
  }
  .link {
    margin: 0px 10px;
    font-size: 10px;
    cursor: pointer;
    color: #666666;
  }
  .link:hover {
    color: black;
  }
  .divider {
    color: #ccccd6;
    font-size: 1px;
  }

  .item:last-child .divider {
    display: none;
  }
  .more {
    width: 50px;
    position: absolute;
    right: -320px;
    top: -8px;
  }
.S{
  font-size: 20px;
}
`;

export default AreaHeaderWrapper;
