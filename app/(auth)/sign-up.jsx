import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import {signUp} from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setUser, setIsLoggedIn } = useGlobalContext();


    const submit = async () => {
        if (!form.username || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields')
            return;
        }

        setIsSubmitting(true)

        try {
            const result = await signUp(form.email, form.password, form.username)
            setUser(result)
            setIsLoggedIn(true)

            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', 'Something went wrong')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className="w-full justify-center min-h-[85vh] px-4 my-6">
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[130px] h-[35px]'
                    />
                    <Text className='text-white text-3xl font-bold mt-10'> Sign up to Aora</Text>

                    <FormField
                        title='Username'
                        value={form.username}
                        handleChangeText={(value) => setForm({ ...form, username: value })}
                        otherStyles='mt-7'
                    />

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

                    <CustomButton
                        title='Sign Up'
                        handlePress={submit}
                        containerStyles={'mt-7'}
                        isLoading={isSubmitting}
                    />

                    <View className='flex-row justify-center pt-5'>
                        <Text className="text-lg text-gray-100 font-pregular">Have an account already ? {" "}</Text>
                        <Link href={'/sign-in'} className='text-lg text-secondary font-psemibold'>Sign Up</Link>

                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignUp
