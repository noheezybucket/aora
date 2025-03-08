import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[130px] h-[35px]'
                    />
                    <Text className='text-white text-3xl font-bold mt-10'> Log in to Aora</Text>

                    <FormField
                        title='Email'
                        value={form.email}
                        handleChangeText={(value) => setForm({ ...form, email: value })}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(value) => setForm({ ...form, password: value })}
                        otherStyles='mt-7'
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignIn
