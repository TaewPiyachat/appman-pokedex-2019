export const calculateHP = hp => {
    const _hp = isNaN(hp) ? 0 : hp
    return Number(_hp) > 100 ? 100 : Number(_hp)
}

export const calculateStrength = (attacks = []) => {
    if (!attacks.length) return 0
    const str = attacks.length * 50
    return str > 100 ? 100 : str
}

export const calculateWeakness = (weaknesses = []) => {
    if (!weaknesses.length) return 0
    const wk = weaknesses.length * 100
    return wk > 100 ? 100 : wk
}

export const calculateDamage = (attacks = []) => {
    if (!attacks.length) return 0
    let sum = 0
    attacks.map(attack => {
        const damage = attack.damage.slice(0, -1)
        sum += Number(damage)
        return attack
    })
    return sum
}

export const calculateHappiness = (hp, damage, weakness) => {
    return Math.round(((hp / 10) + (damage / 10 ) + 10 - (weakness / 10)) / 5)
}