import { Feather } from '@expo/vector-icons'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FC } from 'react'

import { CategoryStack } from './CategoryStack'
import { ContactStack } from './ContactStack'
import { HomeStack } from './HomeStack'
import { ProfileStack } from './ProfileStack'

import { useCallback, useNavigationTheme, useTranslation } from '~hooks'

const { Navigator, Screen } = createBottomTabNavigator()

type ScreenOptions = (params: BottomTabScreenProps) => BottomTabNavigationOptions

export const BottomTabNavigator: FC = () => {
  const { t } = useTranslation()
  const { tabBarTheme } = useNavigationTheme()

  const screenOptions = useCallback<ScreenOptions>(
    ({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: keyof typeof Feather.glyphMap

        if (route.name === 'Home') {
          iconName = 'home'
        } else if (route.name === 'Category') {
          iconName = 'grid'
        } else if (route.name === 'Profile') {
          iconName = 'user'
        } else if (route.name === 'Contact') {
          iconName = 'help-circle'
        } else {
          iconName = 'alert-triangle'
        }

        // You can return any component that you like here!
        return <Feather name={iconName} size={size} color={color} />
      },
      headerShown: false,
      tabBarStyle: [
        {
          display: 'flex',
          height: 70,
          paddingBottom: 10,
        },
      ],
      ...tabBarTheme,
    }),
    [tabBarTheme]
  )

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="Home"
        options={{ title: t('navigation.screen_titles.home') }}
        component={HomeStack}
      />
      <Screen
        name="Category"
        options={{ title: t('navigation.screen_titles.category') }}
        component={CategoryStack}
      />
      <Screen
        name="Profile"
        options={{ title: t('navigation.screen_titles.profile') }}
        component={ProfileStack}
      />
      <Screen
        name="Contact"
        options={{ title: t('navigation.screen_titles.contact') }}
        component={ContactStack}
      />
    </Navigator>
  )
}
