import { useState } from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const PAGE_WIDTH = Dimensions.get('window').width;

const list = [
    {
        id: '1',
        title: 'First Item',
        color: '#26292E',
        img: require('../assets/images/Cpp.png')
    },
    {
        id: '2',
        title: 'Second Item',
        color: '#899F9C',
        img: require('../assets/images/Js.png')
    },
    {
        id: '3',
        title: 'Third Item',
        color: '#B3C680',
        img: require('../assets/images/Python.jpg')
    }
];

function Parallax() {
    const [isVertical, setIsVertical] = useState(false);
    const progressValue = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withSpring(progressValue.value),
            transform: [
                { translateY: withSpring(progressValue.value * 100) }
            ]
        };
    });

    console.log("Rendering Parallax Component");

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                width={PAGE_WIDTH}
                height={PAGE_WIDTH * 0.6}
                vertical={isVertical}
                loop
                pagingEnabled={true}
                snapEnabled={true}
                autoPlay={true}
                autoPlayInterval={1500}
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                data={list}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <Animated.View style={[styles.itemContainer, animatedStyle]}>
                        <Image style={styles.img} source={item.img} />
                    </Animated.View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    img: {
        height: '100%',
        width: '100%',
    }
});

export default Parallax;
