import React, { useState } from 'react'
import styled from 'styled-components'

import { Header } from './header'
import { Footer } from './footer'
import { List } from './list'
import { Modal } from '../modal'

export const PokemonList = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedCard, setSelectedCard] = useState([])

    const removeCard = data => {
        const _selectedCard = [...selectedCard]
        const index = selectedCard.findIndex(c => c.id === data.id)
        _selectedCard.splice(index, 1)
        setSelectedCard([..._selectedCard])
    }

    return (
        <Root>
            <Header />
            <List
                selectedCard={ selectedCard }
                removeCard={ removeCard }
            />
            <Footer
                openModal={ openModal }
                setOpenModal={ setOpenModal }
            />
            { openModal &&
            <Modal
                selectedCard={ selectedCard }
                setSelectedCard={ setSelectedCard }
                openModal={ openModal }
                setOpenModal={ setOpenModal }
            />
            }
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`