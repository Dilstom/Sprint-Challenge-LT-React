import React from 'react';
import styled from 'styled-components';


export const Topbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`;
export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    @media (min-width: 1280px) {
        .top-bar .container {
          width: 1280px;
        }
      }
`;
export const ContainerLeft = styled.div`
display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    span {
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
      }
`;
export const ContainerCenter = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
    span {
        cursor: pointer;
        margin-right: 5%;
      }
      span:last-child {
        margin-right: 0;
      }
      span:hover {
        text-decoration: underline;
      }
`;
export const ContainerRight = styled.div`
display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    span {
        cursor: pointer;
      }
`;

// export const Topbar = styled.div`

// `;
// export const Topbar = styled.div`

// `;



`.top-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
  }
  .top-bar .container {
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
  }
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
  .top-bar .container .container-left {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
  }
  .top-bar .container .container-left span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
  .top-bar .container .container-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
  }
  .top-bar .container .container-center span {
    cursor: pointer;
    margin-right: 5%;
  }
  .top-bar .container .container-center span:last-child {
    margin-right: 0;
  }
  .top-bar .container .container-center span:hover {
    text-decoration: underline;
  }
  .top-bar .container .container-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
  }
  .top-bar .container .container-right span {
    cursor: pointer;
  }`