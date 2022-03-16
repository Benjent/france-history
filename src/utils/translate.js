function translate(word) {
    const mapper = {
        annexations: 'annexions',
        eras: 'ères',
        events: 'évènements',
        governances: 'gouvernances',
        movements: 'mouvements',
        regimes: 'régimes',
        wars: 'guerres',
    }
    return mapper[word]
}

export default translate