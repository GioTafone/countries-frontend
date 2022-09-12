export type Country = {
  name: {
    common: string
    official: string
  }
  capital: string[]
  continents?: string[]
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  population: number
  ccn3?: number
  flags: {
    png: string
  }
}

export type FavouriteState = {
  countries: {
    name: {
      common: string
    }
    flags: {
      png: string
    }
  }[]
}

export type Theme = {
  color: string
  backgroundColor: string
}

export type Themes = {
  orange: Theme
  blue: Theme
  green: Theme
}

export type HeaderTitles = {
  headers: string[]
}

export type Favourite = {
  id: string
  name: string
}

export type ProductState = {
  inCart: Favourite[]
}

export type AppState = {
  product: ProductState
}
