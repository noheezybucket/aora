import {FlatList, Image, RefreshControl, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from '../../constants'
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true)
    //     refetch
        setRefreshing(false)
    }
    return (
        <SafeAreaView className={'bg-primary h-full'}>
            <FlatList
                data={[]}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Text className={'text-5xl text-white'}>{item.id}</Text>
                )}

                ListHeaderComponent={({item}) => (
                    <View className={'my-6 px-4 space-y-6'}>
                        <View className={'justify-between items-start flex-row mb-6'}>
                            <View>
                                <Text className={'font-pmedium, text-sm text-gray-100'} t>Welcome back</Text>
                                <Text className={'text-2xl font-psemibold text-white'} >JSMastery</Text>
                            </View>

                            <View>
                                <Image source={images.logoSmall} className={'w-9 h-10'} resizeMode={'contain'} />
                            </View>
                        </View>
                        <SearchInput />
                        <View className={"w-full flex-1 pt-5 pb-8"}>
                            <Text className={'text-gray-100 text-lg font-pregular mb-3'}>Latest videos</Text>
                            <Trending posts={[{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}] ?? []}
                            />
                        </View>
                    </View>
                )}

                ListEmptyComponent={({item}) => (
                    <EmptyState title={'No videos found.'} subtitle={'Be the fist one to upload a video'} />
                )}

                refreshControl={<RefreshControl />}

            />
        </SafeAreaView>
    )
}

export default Home

