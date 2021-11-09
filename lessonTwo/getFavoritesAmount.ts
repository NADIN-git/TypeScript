class favoritesAmount {
    numberOfItems: 'Number'

    constructor(
        numberOfItems: 'Number',
    ) {
        this.numberOfItems = numberOfItems;
    }
}

const value: unknown = {
    numberOfItems: 5,
}

if (value instanceof favoritesAmount) {
    console.log(value.numberOfItems);
}

export function dataFavorites(v: unknown): v is favoritesAmount {
    return typeof value === 'object'
        && 'numberOfItems' in value
}