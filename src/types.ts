export type Country = {
  name: {
    common: string
  }
  capital: string[]
  currencies: {
    [key: string]: {
      name: string
    }
  }
  population: number
  ccn3: number
  flags: {
    png: string
  }
}

// Enum
// export enum DialogType {
//   SignIn = 'signIn',
//   SignUp = 'signUp',
// }

export type HeaderTitles = {
  headers: string[]
}

// A product
export type Favourite = {
  id: string
  name: string
}

// export type ToggleDialogAction = {
//   type: typeof TOGGLE_DIALOG
//   payload: {
//     dialog: DialogType
//   }
// }

// export type UiActions = ToggleDialogAction

// Use this union in reducer

export type ProductState = {
  inCart: Favourite[]
}

// Using dynamic keys from an enum
// export type UiState = {
//   dialogOpen: {
//     [key in DialogType]?: boolean
//   }
// }

export type AppState = {
  product: ProductState
  // ui: UiState
}
