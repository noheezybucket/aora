import React from 'react';
import {Image, Text, View} from "react-native";
import {images} from '../constants';
import CustomButton from "./CustomButton";
import {router} from "expo-router";

const EmptyState = ({title, subtitle}) => {
    return (
        <View className={'justify-center items-center px-4'}>
            <Image source={images.empty} className={'w-[270px] h-[200px]'} resizeMode={'contain'} />
            <Text className={'text-white font-psemibold text-xl'}>{title}</Text>
            <Text className={'text-gray-100 font-pregular text-base'}>{subtitle}</Text>
            <CustomButton
                title={'Create video'}
                handlePress={() => router.push('/create')}
                containerStyles={'w-full my-5'}
            />
        </View>
    );
};

export default EmptyState;