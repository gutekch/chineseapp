import React from "react";
import { useState } from "react";



const Character_Window = ()=>{
    const character_list = [{
        character:"你好",
        pinyin:"ni hao",
        meaning:"Hello"
    },
    {
        character:"再见",
        pinyin:"zai jian",
        meaning:"Goodbye"
    },
    {
        character:"狗",
        pinyin:"gou",
        meaning:"a Dog"
    },
    {
        character:"猫",
        pinyin:"mao",
        meaning:"a Cat"
    },
    {
        character:"鱼",
        pinyin:"Yu",
        meaning:"a Fish"
    },
    {
        character:"吃",
        pinyin:"chi",
        meaning:"to eat"
    },
    {
        character:"爬山",
        pinyin:"pa shan",
        meaning:"to climb a mountain"
    },
    {
        character:"电脑",
        pinyin:"dian nao",
        meaning:"a Computer"
    },
    {
        character:"电视",
        pinyin:"dian shi",
        meaning:"TV"
    }
];

    const [selectedCharacter,setSelectedCharacter] = useState(null);

    const handleCharacterClick = (index) => {
        setSelectedCharacter(index)
    }


    const containerStyle = {
        border: '2px solid black',
        background: 'rgb(93, 180, 255)',
        marginBottom: '10px',
        marginRight: '10px',
        width:'300px',
        textAlign:'center',
        justifyContent: 'center'
}

    const characterStyle = {
        fontSize:'50px'
    }

    const boxStyle = {
        display: 'flex',
        flexWrap: 'wrap',
    }

    return(
        <div style={boxStyle}>
        {character_list.map((character, index) => (
            <div key={index} style={containerStyle} onClick={()=> handleCharacterClick(index)}>
                <p style={characterStyle}>{character.character}</p>
                {selectedCharacter === index && (
                <>
                <p>Character: {character.character}</p>
                <p>Pinyin: {character.pinyin}</p>
                <p>Meaning: {character.meaning}</p>
                </>
                )}
            </div>
        ))}
    </div>
    )
};

export default Character_Window;