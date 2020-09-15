import React from 'react'
import styled from 'styled-components'

import CuteIcon from '../../cute.png'
import { colors } from '../../contants'
import {
    calculateHP,
    calculateStrength,
    calculateWeakness,
    calculateDamage,
    calculateHappiness,
} from '../../helpers'

export const Card = ({ data = {}, actionButton }) => {
    const {
        id,
        hp,
        name,
        attacks,
        imageUrl,
        weaknesses,
    } = data

    const _hp = calculateHP(hp)
    const _str = calculateStrength(attacks)
    const _wk = calculateWeakness(weaknesses)
    const _damage = calculateDamage(attacks)
    const _happiness = calculateHappiness(_hp, _damage, _wk)

    return (
        <Root>
            <Image src={ imageUrl } alt={ id } />
            <Detail>
                <Name>{ name }</Name>
                <Row>
                    <Title>HP</Title>
                    <TubeBackground>
                        <TubeValue value={ _hp } />
                    </TubeBackground>
                </Row>
                <Row>
                    <Title>STR</Title>
                    <TubeBackground>
                        <TubeValue value={ _str } />
                    </TubeBackground>
                </Row>
                <Row>
                    <Title>WEAK</Title>
                    <TubeBackground>
                        <TubeValue value={_wk  } />
                    </TubeBackground>
                </Row>
                <HappinessRow>
                    {Array.from({ length: _happiness }, (v, i) => i).map(v => (
                        <img key={`cute-${v}`} src={ CuteIcon } alt='happiness-icon' />
                    ))}
                </HappinessRow>
            </Detail>
            <AddButton id='button' onClick={ () => actionButton.action(data) }>
                { actionButton.button }
            </AddButton>
        </Root>
    )
}

const Root = styled.div`
    height: 250px;
    background: ${colors.cardBackground};
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 12px;
    position: relative;
    box-shadow: 2px 2px 5px ${colors.cardBoxShadow};

    :nth-last-child(1) {
        margin: 0;
    }

    :hover {
        box-shadow: 2px 2px 5px ${colors.cardBoxShadowHover};
    
        #button {
            display: block;
        }
    }
`

const Image = styled.img`
    height: 100%;
`

const Detail = styled.div`
    height: 100%;
    width: 100%;
    max-width: 500px;
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
    margin-left: 8px;
    box-shadow: 2px 2px 5px ${colors.levelTubeBoxShadow};
`

const TubeValue = styled.div`
  width: ${p => (p.value || 0)}%;
  height: 30px;
  background: red;
  border-radius: 16px;
  background: ${colors.levelTubeValueBackground};
`

const AddButton = styled.span`
    display: none;
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 24px;
    color: ${colors.colorAddButton};
    cursor: pointer;
`