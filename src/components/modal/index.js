import React from 'react'
import styled from 'styled-components'

import { Card } from '../card'
import { colors } from '../../contants'
import SearchIcon from '../../search.png'

export const Modal = () => {
    return (
        <Root>
            <Container>
                <SearchBar>
                    <input />
                    <img src={ SearchIcon } alt='search-icon' />
                </SearchBar>
                <CardList>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardList>
            </Container>
            {/* <Outside /> */}
        </Root>
    )
}

const Root = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: ${colors.modalOutside};  
`

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90%;
  height: 100%;
  max-height: 90%;
  background: white;
  padding: 16px;
`

const SearchBar = styled.div`
    height: 50px;
    display: flex;
    border: 1px solid ${colors.searchBoxBorder};
    margin-bottom: 16px;

  input {
    display: flex;
    flex: 1;
    border: none;
    font-size: 20px;
    font-family: 'Gaegu';

    :focus {
        outline: none;
    }
  }

  img {
      width: 50px;
      height: 50px;
      cursor: pointer;
  }
`

const CardList = styled.div`
  /* display: flex;
  flex-direction: column; */
  overflow-y: auto;
`

// const Outside = styled.div`
//     position: absolute;
//     top: 0;
//     width: 100%;
//     height: 400px;
//     background: ${colors.modalOutside};
// `