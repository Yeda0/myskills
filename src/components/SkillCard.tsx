import React from 'react'
import {TouchableOpacity,Text,StyleSheet,TouchableOpacityProps} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps{
    skill:string
}

export function SkillCard({skill, ...rest} : SkillCardProps){
    return(
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
        <Text style={styles.textSkill}
        {...rest}
        >{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ // Para personalizar o stylesheet
    
    buttonSkill:{
        backgroundColor:'#1F1e25',
        padding:15,
        borderRadius:50,
        alignItems:'center'
    },
    textSkill:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold'
    }

   
})