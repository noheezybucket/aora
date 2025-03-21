import React, {useState} from 'react';
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import * as Animatable from 'react-native-animatable'
import {icons} from "../constants";

const zoomIn = {
    0: {
        scale: 0.9,
    },
    1: {
        scale: 1,
    }
}

const zoomOut = {
    0: {
        scale: 1,
    },
    1: {
        scale: 0.9,
    }
}

const TrendingItem = ({activeItem, item}) => {
    const [play, setPlay] = useState(false)

    return (
        <Animatable.View
            className={'mr-5'}
            animation={activeItem === item.$id ? zoomIn : zoomOut}
            duration={500}
        >

            {
                play ?
                    <Text className={'text-white'}>playing</Text>
                    :
                    <TouchableOpacity className={'relative justify-center items-center'} activeOpacity={0.7}
                    onPress={() => setPlay(true)}
                    >
                        <ImageBackground source={{uri : item.thumbnail}}
                        className={'w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'}
                                         resizeMode="cover"
                        />
                        <Image source={icons.play } className={'absolute w-12 h-12'} resizeMode={'contain'}/>
                    </TouchableOpacity>
            }
    </Animatable.View>
    )
}

const Trending = ({posts}) => {

    const [activeItem, setActiveItem] = useState(posts[1])

    const viewableItemsChanged = ({viewableItems}) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key)
        }
    }

    return (
        <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
           <TrendingItem activeItem={activeItem} item={item} />
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
            itemVisiblePercentThreshold:70
        }}
        contentOffset={{x:170}}
        horizontal={true}
        />
    );
};

export default Trending;