// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

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

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Favourite
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Favourite
  }
}

// export type ToggleDialogAction = {
//   type: typeof TOGGLE_DIALOG
//   payload: {
//     dialog: DialogType
//   }
// }

// export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

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
