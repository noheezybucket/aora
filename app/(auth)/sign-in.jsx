import { Alert, Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import {getCurrentUser, logOut, signIn} from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const { setUser, setIsLoggedIn } = useGlobalContext();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields')
            return;
        }

        setIsSubmitting(true)

        try {
            await signIn(form.email, form.password)
            const result = await getCurrentUser();
            setUser(result)
            setIsLoggedIn(true)
            Alert.alert("Success", "User signed in successfully");
            router.replace("/home");
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

                    <CustomButton
                        title='Sign In'
                        handlePress={submit}
                        containerStyles={'mt-7'}
                        isLoading={isSubmitting}
                    />

                    <View className='flex-row justify-center pt-5'>
                        <Text className="text-lg text-gray-100 font-pregular">Don't have an account ? {" "}</Text>
                        <Link href={'/sign-up'} className='text-lg text-secondary font-psemibold'>Sign Up</Link>

                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignIn
