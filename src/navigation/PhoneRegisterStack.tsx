/**
 * was created by tigran at 09.07.23
 */
import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import PhoneInput from 'react-native-phone-input'

import { SHOP_API } from '~api'
// import { ImgOrSvg } from '~components/ImgOrSvg'
import { CustomButton } from '~components/molecules/CustomButton'
import { SCREEN } from '~constants'
// import { NoImage } from 'assets/svg'
export const PhoneRegisterStack: FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const navigation = useNavigation<any>()

  const handlePhoneNumberChange = (number: string) => {
    setPhoneNumber(number)
  }

  const handleButtonPress = async () => {
    const data = await SHOP_API.setPhoneNumberRequest(phoneNumber)
    /*FIXME can't find why it shows this error!!!!*/
    navigation.navigate(SCREEN.STACK_VERIFICATION, {
      phone: phoneNumber,
      duration: data.payload.duration,
      handleResend: handleButtonPress,
    })
  }

  return (
    <View style={styles.PhoneRegisterStack_wrapper}>
      <PhoneInput
        style={styles.input}
        initialCountry="am"
        onChangePhoneNumber={handlePhoneNumberChange}
        textProps={{ placeholder: '+37491444444' }}
      />
      <CustomButton title="Registration" onPress={handleButtonPress} />
      {/*** FIXME open only for auth ***/}
      {/*<TouchableOpacity onPress={navigation.navigate(SCREEN.STACK_SIGN_IN)}>*/}
      {/*  <Text>Already have account ?</Text>*/}
      {/*</TouchableOpacity>*/}
      {/*<ImgOrSvg />*/}
      {/*<NoImage height={200} width={200} fill={'red'} />*/}
    </View>
  )
}

const colors = {
  border: '#ddd',
  red: 'red',
}

const styles = StyleSheet.create({
  PhoneRegisterStack_wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderColor: colors.border,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '100%',
  },
})
