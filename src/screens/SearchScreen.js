import Axios from 'axios';
import React, { useState }  from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResultList from '../components/ResultList';
import SearchBox from '../components/SearchBox'
import useResults  from '../hooks/useResults'

const SearchScreen = () => {

    const [term, setterm] = useState('')
    const [results, errorMessage, loading, SearchApi] = useResults()

    const filterResultByPrice = price => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    if(loading) {
        return (
            <View style={styles.loadingStyle}>
                <ActivityIndicator size="large" color="#696969" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <SearchBox 
                term = {term}
                //{setterm}
                onChangeTerm = {newterm => setterm(newterm)}
                onSubmitTerm = {() => SearchApi(term)}
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultList results = {filterResultByPrice('$')} title = "Cost Effective" />
                <ResultList results = {filterResultByPrice('$$')} title = "Bit Pricier" />
                <ResultList results = {filterResultByPrice('$$$$')} title = "Big Spender" />
            </ScrollView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: hp(2)        
    },
    loadingStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
