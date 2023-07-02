import { Image, Text, View } from 'native-base'
import { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { getImagePath } from '~api'
// import { SCREEN } from '~constants'
import { IFeatured } from '~types/featuredProducts'
import { getVH } from '~utils/breakpoints'

interface ITrendingItems {
  items: IFeatured[]
  navigation: any
}

export type TTrendingItems = {
  id: number
  image: string
  name: string
}

const colors = {
  headingColor: '#212529',
  borderColor: '#D2D2D2',
  nameColor: '#646464',
}

// const TrendingItems: FC<ITrendingItems> = ({ items }) => {
const TrendingItems: FC<ITrendingItems> = ({ items, navigation }) => {
  return (
    <View style={styles.main}>
      {items.length > 0 && <Text style={styles.heading}>Featured</Text>}
      <View style={styles.container}>
        {items &&
          items.map((item) => {
            const { name, id } = item
            return (
              <TouchableOpacity
                key={id}
                style={styles.item}
                // onPress={navigation(SCREEN.STACK_PRODUCT_INNER, item)}
                // onPress={navigation(SCREEN.STACK_CATEGORY, {
                //   screen: SCREEN.STACK_PRODUCT_INNER,
                //   params: { item },
                // })}
              >
                <Image
                  src={getImagePath(item.gallery[0].filename, '-product')}
                  alt={`Trending ${name}`}
                  style={styles.image}
                  resizeMode={'cover'}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{name}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
    justifyContent: 'space-between',
    width: '100%',
  },

  heading: {
    color: colors.headingColor,
    fontSize: 20,
    marginBottom: 10,
  },

  image: {
    aspectRatio: 1,
    width: '100%',
  },

  item: {
    alignItems: 'center',
    borderColor: colors.borderColor,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1.5,
    height: getVH(35),
    justifyContent: 'flex-start',
    marginHorizontal: 2,
    marginVertical: 10,
    overflow: 'hidden',
    padding: 10,
    width: '48%',
  },

  main: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    paddingHorizontal: 10,
    paddingTop: 15,
  },

  name: {
    color: colors.nameColor,
    // fontSize: isMedium ? 18 : 16,
    fontWeight: '700',
  },

  textContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
})

export default TrendingItems
