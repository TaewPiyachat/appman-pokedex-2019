import React from 'react'
import styled from 'styled-components'

import { Header } from './header'
import { Footer } from './footer'
import { List } from './list'
import { Modal } from '../modal'

export const PokemonList = () => {
    return (
        <Root>
            <Header />
            <List />
            <Footer />
            <Modal />
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`