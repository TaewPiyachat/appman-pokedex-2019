import React from 'react'
import styled from 'styled-components'
import { Card } from '../card'

export const List = ({ selectedCard, removeCard }) => {
    return (
        <Root>
            {selectedCard.map(card => {
                return (
                    <Card
                        key={ card.id }
                        data={ card }
                        actionButton={ {
                            button: 'X',
                            action: removeCard,
                        } }
                    /> 
                )
            })}
        </Root>
    )
}

const Root = styled.div`
    height: 100vh;
    max-height: 600px;
    background: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 16px;
    overflow-y: auto;
    padding: 10px;
`
