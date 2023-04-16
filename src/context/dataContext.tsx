import createContext from "./createContext"

const initialState = {
  isLogged: true,
  theme: true,
  overlay: false,
  modal: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "isLogged":
      return { ...state, isLogged: action.payload }
    case "theme":
      return { ...state, theme: action.payload }
    case "overlay":
      return { ...state, overlay: action.payload }
    case "modal":
      return { ...state, modal: action.payload }
    default:
      return state
  }
}

const setTheme = (dispatch) => {
  return (theme) => {
    dispatch({ type: "theme", payload: theme })
  }
}

const setIsLogged = (dispatch) => {
  return (boolean) => {
    dispatch({ type: "isLogged", payload: boolean })
  }
}

const setOverlay = (dispatch) => {
  return (boolean) => {
    dispatch({ type: "overlay", payload: boolean })
  }
}

const setModal = (dispatch) => {
  return (object) => {
    dispatch({ type: "modal", payload: object })
  }
}

export const { Context, Provider } = createContext(
  reducer,
  { setIsLogged, setTheme, setOverlay, setModal },
  initialState
)
