import { useState, useCallback } from 'react'

export const useToggle = (
  initialState = false
): [boolean, () => void, (newState: boolean) => void] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState)
  console.log('worked - ', state)
  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), [])

  return [state, toggle, setState]
}
