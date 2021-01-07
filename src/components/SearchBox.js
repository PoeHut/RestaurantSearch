import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

const SearchBox = ({term, onChangeTerm, onSubmitTerm}) => {
    
    return (
        <View style={styles.SearchBar}>
            <Icon name="search" size={30} style={styles.iconStyle} />            
            <TextInput
                autoCapitalize = "none"
                autoCorrect = {false}
                style={styles.inputStyle} 
                placeholder = "Search"
                value={term}
                onChangeText = {newtext => onChangeTerm(newtext) }
                onEndEditing = {() => onSubmitTerm()}
            />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    SearchBar: {
        backgroundColor: '#F5F5DC',
        borderColor: '#FAEBD7',
        borderWidth: 1,
        borderRadius: hp(1),
        marginVertical: hp(2),
        flexDirection: 'row',
        alignItems: 'center' 
    },
    inputStyle: {        
        fontSize:hp(3),
        flex: 1
    },
    iconStyle: {
        marginLeft: hp(1)
    }
})
