import React from 'react'
import styled from 'styled-components'

import { colors } from '../../contants'

export const Card = () => {
    return (
        <Root>
        </Root>
    )
}

const Root = styled.div`
    height: 200px;
    background: ${colors.cardBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;

    :nth-last-child(1) {
        margin: 0;
    }
`

const Text = styled.span`
    font-size: 40px;
`