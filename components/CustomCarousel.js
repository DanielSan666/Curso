import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const PAGE_WIDTH = Dimensions.get('window').width;

const list = [
    {
        id: '1',
        title: 'First Item',
        img: require('../assets/images/Cpp.png')
    },
    {
        id: '2',
        title: 'Second Item',
        img: require('../assets/images/Js.png')
    },
    {
        id: '3',
        title: 'Third Item',
        img: require('../assets/images/Python.jpg')
    }
];

function CustomCarousel() {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.img} source={item.img} />
            </View>
        );
    };

    return (
        <Carousel
            data={list}
            renderItem={renderItem}
            sliderWidth={PAGE_WIDTH}
            itemWidth={PAGE_WIDTH * 0.8}
            loop={true}
            autoplay={true}
            autoplayInterval={3000}
        />
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',
    }
});

export default CustomCarousel;
