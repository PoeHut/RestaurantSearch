import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source = {{uri : result.image_url}} />
            <Text style={styles.textStyle}>{result.name}</Text>
            <Text style={styles.infoText}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

export default ResultDetail

const styles = StyleSheet.create({
    container: {
        marginRight: hp(2),
        marginVertical: hp(1.5)
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 2
    },
    textStyle: {
        fontSize: hp(2.8),
        fontWeight: 'bold'
    },
    infoText: {
        color: '#625757'
    }
})
