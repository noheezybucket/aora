import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {icons} from "../constants";

const VideoCard = ({videoItem: {
    title,
    thumbnail,
    video,
    creator : {
        username,
        url,
    }
}
}) => {

    const [play, setPlay] = useState(false)

    return (
        <View className={'flex-col items-center px-4 mb-14'}>
            <View className={'flex-row gap-3 items-start'}>
                <View className={'flex-row justify-center items-center flex-1'}>
                    <View className={'w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'}>
                        <Image source={{uri: url}}
                               className={'w-full h-full rounded-lg '}
                               resizeMode={'cover'}
                        />
                    </View>
                    <View className={'justify-center flex-1 ml-3 gap-y-1`'}>
                        <Text className={'text-white font-psemibold text-md'} numberOfLines={1}>{title}</Text>
                        <Text className={'text-gray-100 font-pregular text-sm'} numberOfLines={1}>{username}</Text>
                    </View>
                </View>
                <View className={'pt-2'}>
                    <Image source={icons.menu}
                           className={'w-5 h-5 '}
                           resizeMode={'contain'}
                    />
                </View>
            </View>
            {
                play ?
                    <Text className={'text-white'}>playing</Text>
                    :
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {setPlay(true)}}
                    className={'w-full h-60 mt-3 relative justify-center items-center '}>
                        <Image
                            source={{uri: thumbnail}}
                            className={'w-full h-full rounded-xl mt-3 '}
                            resizeMode={'cover'}
                        />
                        <Image
                            source={icons.play}
                            className={'w-12 h-12 absolute'}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
            }
        </View>
    );
};

export default VideoCard;