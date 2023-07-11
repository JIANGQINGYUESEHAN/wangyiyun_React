import styled from "styled-components";

const CarouselWrapper = styled.div`
 .carousel {
    overflow: hidden;
    width: 700px;
    display: flex;
    flex-direction: column;

    height: 300px;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    background-color: red;
    position: relative;

  }



  .carousel-item {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 700px;
    color: red;
    background-color: black;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
  }

  .active {
    opacity: 1;
    transform: scale(1.1);
    transition-duration: 3s;
  }

  .arrow {
    position: absolute;
    z-index: 99;
    top: 1000px;
  }
`

export default CarouselWrapper
