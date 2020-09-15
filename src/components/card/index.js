import React from 'react'
import styled from 'styled-components'

import CuteIcon from '../../cute.png'
import { colors } from '../../contants'

export const Card = ({ data = {} }) => {
    const {
        id,
        hp,
        name,
        attacks,
        imageUrl,
        weaknesses,
    } = data

    return (
        <Root>
            <Image src={ imageUrl } alt={ id } />
            <Detail>
                <Name>{ name }</Name>
                <Row>
                    <Title>HP</Title>
                    <TubeBackground>
                        <TubeValue />
                    </TubeBackground>
                </Row>
                <Row>
                    <Title>STR</Title>
                    <TubeBackground>
                        <TubeValue />
                    </TubeBackground>
                </Row>
                <Row>
                    <Title>WEAK</Title>
                    <TubeBackground>
                        <TubeValue />
                    </TubeBackground>
                </Row>
                <HappinessRow>
                    <img src={ CuteIcon } alt='happiness-icon' />
                    <img src={ CuteIcon } alt='happiness-icon' />
                    <img src={ CuteIcon } alt='happiness-icon' />
                </HappinessRow>
            </Detail>
        </Root>
    )
}

const Root = styled.div`
    height: 300px;
    background: ${colors.cardBackground};
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 12px;

    :nth-last-child(1) {
        margin: 0;
    }
`

const Image = styled.img`
    height: 100%;
`

const Detail = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 16px;
`

const Name = styled.span`
    font-family: 'Gaegu';
    font-size: 40px;
`

const Row = styled.div`
    display: flex;
    margin-bottom: 8px;
`

const HappinessRow = styled.div`
    img {
        width: 60px;
        height: 60px;
        margin: 0 2px;
    }
`

const Title = styled.span`
    font-size: 24;
    flex: 1;
`

const TubeBackground = styled.div`
    flex: 4;
    height: 30px;
    border-radius: 16px;
    background: ${colors.levelTubeBackground};
`

const TubeValue = styled.div`
  width: 40%;
  height: 30px;
  background: red;
  border-radius: 16px;
  background: ${colors.levelTubeValueBackground};
`