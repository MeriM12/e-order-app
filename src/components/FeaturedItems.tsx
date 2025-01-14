import { View, Text } from 'native-base'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { ImgOrSvg } from '~components/ImgOrSvg'
import { SCREEN } from '~constants'
import { IFeatured } from '~types/featuredProducts'
import { getVW, screenWidth } from '~utils/breakpoints'
import { customStyles } from '~utils/style_helpers'

interface ITrending {
  items: IFeatured[]
  navigation: any
}

const FeaturedItems: FC<ITrending> = ({ items, navigation }) => {
  return (
    <View style={styles.body}>
      {items.length > 0 && <Text style={styles.heading}>Featured</Text>}
      <View style={styles.main}>
        <Carousel
          loop
          autoplay
          vertical={false}
          style={styles.swiper}
          enableSnap
          data={items}
          useScrollView
          renderItem={({ item, index }: any) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => {
                  navigation.navigate(SCREEN.STACK_PRODUCT_INNER, item)
                }}
              >
                <ImgOrSvg item={item} product="-product" column={1} padding={31} />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.price}>₽ {item.price}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
          sliderWidth={screenWidth}
          itemWidth={getVW(75)}
        />
      </View>
    </View>
  )
}

const colors = {
  headingColor: '#212529',
  borderColor: '#D2D2D2',
  nameColor: '#646464',
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    width: '100%',
  },

  heading: {
    color: colors.headingColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    borderRadius: 8,
    ...customStyles.border(1, 'solid', colors.borderColor),
    padding: 10,
  },

  main: {
    flexGrow: 1,
  },

  name: {
    color: colors.nameColor,
    fontSize: 16,
  },

  price: {
    textAlign: 'left',
  },

  swiper: {
    flexGrow: 1,
  },

  textContainer: {
    flexGrow: 1,
  },
})

export default FeaturedItems
