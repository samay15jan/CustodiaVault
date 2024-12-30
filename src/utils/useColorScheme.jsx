import React from 'react'

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = React.useState('light')

  React.useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)')
    const matchLight = window.matchMedia('(prefers-color-scheme: light)')

    const updateColorScheme = () => {
      if (matchDark.matches) {
        setColorScheme('dark')
      } else if (matchLight.matches) {
        setColorScheme('light')
      } else {
        setColorScheme('no-preference')
      }
    }

    updateColorScheme()

    matchDark.addEventListener('change', updateColorScheme)
    matchLight.addEventListener('change', updateColorScheme)

    return () => {
      matchDark.removeEventListener('change', updateColorScheme)
      matchLight.removeEventListener('change', updateColorScheme)
    }
  }, [])
  
  return colorScheme
}

export default useColorScheme
