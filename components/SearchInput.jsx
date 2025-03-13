import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false);
    return (

            <View className="w-full h-16 px-4 mt-2 bg-black-100 border-2 border-black-200 rounded-xl focus:border-secondary items-center flex-row space-x-4">
                <TextInput
                    className="flex-1 text-white font-pregular text-base mt-0.5 w-full"
                    value={value}
                    placeholder={"Search for a video topic"}
                    placeholderTextColor={'#7b7b8b'}
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                <TouchableOpacity>
                    <Image source={icons.search} resizeMode={'contain'} className={'w-5 h-5'}/>
                </TouchableOpacity>
            </View>
    )
}

export default SearchInput