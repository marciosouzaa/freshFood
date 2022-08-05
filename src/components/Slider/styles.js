import styled from 'styled-components';

export const Container = styled.section`
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }

  .slick-initialized .slick-slide {
    display: block;
  }


`;
