import { createStackNavigator } from '@react-navigation/stack'

import { useTranslation } from '~hooks'
import { HomeScreen } from '~screens'

const { Navigator, Screen } = createStackNavigator()

export const HomeStack = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Navigator>
      <Screen
        name="HomePage"
        options={{ title: t('navigation.screen_titles.home') }}
        component={HomeScreen}
      />
    </Navigator>
  )
}
