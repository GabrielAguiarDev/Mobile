import createContext from "./createContext"

const initialState = {
  isLogged: true,
  theme: true,
  visibleNavigation: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "isLogged":
      return { ...state, isLogged: action.payload }
    case "theme":
      return { ...state, theme: action.payload }
    case "visibleNavigation":
      return { ...state, visibleNavigation: action.payload }
    default:
      return state
  }
}

const setNavigationVisible = (dispatch) => {
  return (boolean) => {
    dispatch({ type: "visibleNavigation", payload: boolean })
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

export const { Context, Provider } = createContext(
  reducer,
  { setIsLogged, setTheme, setNavigationVisible },
  initialState
)
