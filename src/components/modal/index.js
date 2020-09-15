import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Card } from '../card'
import { colors } from '../../contants'
import SearchIcon from '../../search.png'

const URL = 'http://localhost:3030/api/cards'

export const Modal = ({
    selectedCard,
    setSelectedCard,
    openModal,
    setOpenModal,
}) => {
    const [search, setSearch] = useState('')
    const [cards, setCards] = useState([])

    const _cards = cards.filter(card => {
        if (selectedCard.find(c => c.id === card.id)) return null
        if (search !== '') {
            const _search = search.toLowerCase()
            if (card.type.toLowerCase().includes(_search) || card.name.toLowerCase().includes(_search)) return card
            return null
        }
        return card
    })

    useEffect(() => {
        fecthData()
    }, [])

    const fecthData = async () => {
        const res = await fetch(URL).then(r => r.json())
        if (res.cards) {
            setCards(res.cards)
        }
    }

    const handleAddCard = card => {
        setSelectedCard([...selectedCard, card])
    }

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    return (
        <Root>
            <Container>
                <SearchBar>
                    <input
                        placeholder='Find Pokemon'
                        onChange={ handleSearch }
                        value={ search }
                    />
                    <img src={ SearchIcon } alt='search-icon' />
                </SearchBar>
                <CardList>
                    {_cards.map(card => {
                        return (
                            <Card
                                key={ card.id }
                                data={ card }
                                actionButton={ {
                                    button: 'Add',
                                    action: handleAddCard,
                                } }
                            />
                        )
                    })}
                </CardList>
            </Container>
            <Outside onClick={ () => setOpenModal(!openModal) } />
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
  max-width: 85%;
  height: 100%;
  max-height: 90%;
  background: ${colors.modalContentBackground};
  padding: 16px;
  z-index: 10;
  box-shadow: 2px 2px 5px ${colors.modalContentBoxShadow};
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
  overflow-y: auto;
`

const Outside = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 400px;
    background: ${colors.modalOutside};
`