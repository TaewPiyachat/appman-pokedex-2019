import React from 'react'
import styled from 'styled-components'
import { Card } from '../card'

export const List = () => {
    return (
        <Root>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Root>
    )
}

const Root = styled.div`
    height: 100%;
    max-height: calc(100vh - 180px);
    background: white;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    overflow-y: auto;
`
