import { useReducer, createContext } from "react"

export default (reducer: any, actions: any, initialState: any) => {
  const Context = createContext(null)

  function Provider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fucntionsProcess = {}
    Object.keys(actions).forEach(
      (key) => (fucntionsProcess[key] = actions[key](dispatch))
    )

    return (
      <Context.Provider value={{ state, ...fucntionsProcess }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}
