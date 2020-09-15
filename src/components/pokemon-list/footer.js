import React from 'react'
import styled from 'styled-components'

import { colors } from '../../contants'

export const Footer = ({ openModal, setOpenModal }) => {
    return (
        <Root>
            <AddButton onClick={ () => setOpenModal(!openModal) }>+</AddButton>
        </Root>
    )
}

const Root = styled.div`
    height: 70px;
    background: ${colors.bottomBarBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const AddButton = styled.div`
    height: 100px;
    width: 100px;
    position: absolute;
    top: -45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${colors.bottomBarBackground};
    box-shadow: 2px 2px 5px ${colors.bottomBarBoxShadow};
    font-size: 60px;
    color: ${colors.bottomBarTextColor};
    cursor: pointer;
`