import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) =>{
    const {textStyle,viewStyle}=styles;
    return( 
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles ={

    viewStyle:{
        backgroundColor:'gray',
        height:60,
        justifyContent:'center',
        alignItems:'center',
    },

    textStyle:{
       fontSize:25,
       color:'#ffffff'
    }
}

export default Header;