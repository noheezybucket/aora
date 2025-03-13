import React from 'react';
import {FlatList, Text, View} from "react-native";

const Trending = ({posts}) => {
    return (
        <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <Text className={'text-5xl text-white'}>{item.id}</Text>
        )}
        horizontal={true}
        />
    );
};

export default Trending;