import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'

export default function Page() {
  return (

    <>
    <Stack.Screen options={{headerShown: false}} />
    <View style={styles.container}>
      <Text style={styles.text}>Transactions</Text>
      {/* <NetflixIcon width={22} height={22} color={'#000'} /> */}
    </View>
    </>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black
    },
    text: {
        color: Colors.white
    }
})