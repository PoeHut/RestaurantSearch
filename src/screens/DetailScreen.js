import React, {useState, useEffect}  from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import yelp from '../api/yelp';

const DetailScreen = ({route}) => {
    const {id} = route.params;
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    
    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);

            setError(null)
            setResult(response.data);
        } catch(e) {
            setError('Something went wrong');
        }
    }

    useEffect(() => {
       getResult(id);
    }, [])

    if(!result) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{result.name}</Text>
           <FlatList
                showsVerticalScrollIndicator={false}
                data = {result.photos}
                keyExtractor = {photo => photo}
                renderItem = {({item}) => { 
                    return <Image style={styles.image} source={{uri: item}} />
                }}
           />
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: hp(5)
    },
    image: {
        width: wp(90),
        height: hp(35),
        borderRadius: 5,
        marginVertical: hp(2),
        
    }
})
