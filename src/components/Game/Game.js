import { useState } from "react";

const Game=()=>{
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
        meaning:"Dog"
    },
    {
        character:"猫",
        pinyin:"mao",
        meaning:"Cat"
    },
    {
        character:"鱼",
        pinyin:"Yu",
        meaning:"Fish"
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
        meaning:"Computer"
    },
    {
        character:"电视",
        pinyin:"dian shi",
        meaning:"TV"
    }
];

// funtion to get a random character from character list

const getCharacter = () => {
    const randomIndex = Math.floor(Math.random() * character_list.length);
    return character_list[randomIndex]
}

// getting a random character

const randomCharacter = getCharacter();

// show the character details only after the user clicks on it

const [characterDetails,SetCharacterDetails] = useState(false);
const handleClick = () => {
    SetCharacterDetails(true);
}

// styling the container

const containerStyle = {
    backgroundColor:"rgb(255, 215, 69)",
    textAlign:'center',
    width:'500px',
    justifyContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
    border:'10px solid black',
    marginTop:'40px'
}

// styling the initial big character
const bigCharacterStyle = {
    fontSize:"150px"
}

    return(
            <div style={containerStyle}>
                <p style={bigCharacterStyle} onClick={handleClick}>{randomCharacter.character}</p>
                {characterDetails === true &&(
                <div>
                    <p>Character:{randomCharacter.character}</p>
                    <p>Pinyin:{randomCharacter.pinyin}</p>
                    <p>Meaning:{randomCharacter.meaning}</p>
                </div>
                )};
                
            </div>
    );
};

export default Game;