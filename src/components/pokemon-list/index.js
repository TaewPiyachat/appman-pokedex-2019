import React from 'react'
import styled from 'styled-components'

import { Header } from './header'
import { Footer } from './footer'

export const PokemonList = () => {
    return (
        <Root>
            <Header />
            <Footer />
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
`