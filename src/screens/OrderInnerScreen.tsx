import { useFocusEffect } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { SHOP_API } from '~api'
import { IOorder, IProduct } from '~types/order'
import { timestampToDate } from '~utils/dateTimeFormat'
import { customStyles } from '~utils/style_helpers'

export const OrderInnerScreen: FC = ({ route }: any) => {
  const id = route.params.id
  const [order, setOrder] = useState<IOorder>()

  useFocusEffect(
    React.useCallback(() => {
      const getData = async () => {
        const orderData = await SHOP_API.getOrdersDetails(id)
        console.log(id, 'orderDataorderData')
        setOrder(orderData.payload)
      }
      getData()
    }, [id])
  )

  return order ? (
    <View style={styles.ShopListScreen_wrapper}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.text_h2}>Заказ # {order.orderNumber}</Text>
          <View style={styles.hr} />
          <Text>Дата создания: {timestampToDate(order.createdAt)}</Text>
          <Text>Дата обновления: {timestampToDate(order.updatedAt)}</Text>
          <Text>Статус: {order.status}</Text>
        </View>

        <View style={styles.hr} />
        {order.orderItems.map((item: IProduct, index: number) => (
          <View key={index} style={styles.box}>
            <Text>ТОВАР : {item.productName}</Text>
            <Text>КОЛ-ВО : {item.quantity}</Text>
            {/*<View style={styles.hr}/>*/}
            <Text>ЦЕНА : {item.price}</Text>
            <Text>СКИДКА : {item.discount}</Text>
            <Text>БОНУС : {item.reward} </Text>
            <Text>СУММА : {(item.price - (item.price * item.discount) / 100).toFixed(2)}</Text>
          </View>
        ))}

        {/*<View style={styles.hr} />*/}

        <View style={styles.commentsContainer}>
          <Text style={styles.text_h1}>Комментарий</Text>
        </View>

        <View style={styles.provideContainer}>
          <View style={styles.provide}>
            <Text style={styles.provide_text}>ПОСТАВЩИК</Text>
          </View>
          <Text style={styles.text_h1}>Мартин Урал</Text>
          <Text style={styles.text}>Russia, Tyumen</Text>
          <Text style={styles.text}>Телефон: +9199489474</Text>
        </View>

        <View style={styles.provideContainer}>
          <View style={styles.provide}>
            <Text style={styles.provide_text}>МАГАЗИН</Text>
          </View>
          <Text style={styles.text_h1}>Shop11111</Text>
          <Text style={styles.text}>Erevan, Armenia</Text>
          <Text style={styles.text}>Телефон: +9199489474</Text>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View>
      <Text>Something wrong with your request</Text>
    </View>
  )
}

const colors = {
  black: 'black',
  white: 'white',
  borderColor: '#d1d1d1',
  background: '#f1f1f1',
  red: 'red',
}

const styles = StyleSheet.create({
  ShopListScreen_wrapper: {
    flex: 1,
    position: 'relative',
  },
  box: {
    borderRadius: 5,
    margin: 10,
    minHeight: 100,
    padding: 5,
    ...customStyles.border(1, 'solid', colors.borderColor),
  },
  commentsContainer: {
    borderRadius: 5,
    margin: 10,
    minHeight: 100,
    padding: 5,
    ...customStyles.border(1, 'solid', colors.borderColor),
  },
  hr: {
    ...customStyles.border(1, 'solid', colors.borderColor),
    marginVertical: 5,
  },
  provide: {
    backgroundColor: colors.red,
    borderRadius: 3,
    height: 20,
    marginHorizontal: 210,
    width: 135,
  },
  provideContainer: {
    borderRadius: 5,
    margin: 10,
    minHeight: 150,
    padding: 10,
    ...customStyles.border(1, 'solid', colors.borderColor),
  },
  provide_text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text_h1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text_h2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
})
