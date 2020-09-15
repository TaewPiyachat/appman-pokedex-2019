import React from 'react'
import styled from 'styled-components'

export const Header = () => {
    return (
        <Root>
            <Text>My Pokedex</Text>
        </Root>
    )
}

const Root = styled.div`
    height: 80px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.span`
    font-size: 40px;
`