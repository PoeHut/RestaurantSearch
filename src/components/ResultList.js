import React from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

const ResultList = ({title, results}) => {
    const navigation = useNavigation();
        
    if(!results.length) { return null; }
    
    return (
        <View>
            <Text style={styles.textStyle}>{title}</Text>          
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data = {results}
                        keyExtractor = {result => result.id}
                        renderItem = {({item}) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                                    <ResultDetail result = {item} />
                                </TouchableOpacity>    
                            )
                        }}
                    />
        </View>
    )
}

export default ResultList

const styles = StyleSheet.create({
    textStyle: {
        fontSize: hp(3),
        fontWeight: 'bold',
    }
})
