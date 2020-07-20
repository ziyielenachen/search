
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function App() {
  const country = "Mexico"
  const [keyword, onChangeKeyword] = useState("")
  const [doctorsFound, onChangeDoctorsFound] = useState([])


  function findDoctors() {
    var keywordLowercase = keyword.toLowerCase()
    if (searchKeys[keywordLowercase]) {
      let practice = searchKeys[keywordLowercase]
      onChangeDoctorsFound(Doctors[country][practice])
      //get corresponding doctor info from API
    } else {
      var keywords = keywordLowercase.split(" ")
      for (let key in keywords) {
        if (searchKeys[key]) {
          let practice = searchKeys[keyword]
          onChangeDoctorsFound(Doctors[country][practice])
          break
        }
      }
      onChangeDoctorsFound(Doctors[country].hospitals)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder=" search for care"
        defaultValue={keyword} onChangeText={keyword => onChangeKeyword(keyword)}></TextInput>
      <Button color="black" title="Find Doctors" borderRadius="10px" onPress={findDoctors}></Button>
      {doctorsFound.map((item, key) => (
        <Text color="white" key={key}> {item} </Text>
      ))
      }
    </View >
  );
}

const searchKeys = {
  "broken bones": "urgentCare",
  //use set for keys?
  "bone": "urgentCare",
  "bones": "urgentCare",
  "cold": "generalPractice",
  "flu": "generalPractice",
  "bumps": "generalPractice",
  "pregnancy": "OBGYN",
  "stomachache": "hospitals",
  "kid": "pediatrician",
  "migraine": "generalPractice",
  "allergic reaction": "urgentCare",
  "wisdom teeth": "dental",
  "fever": "hospitals",
  "birth control": "OBGYN",
  "glasses": "optometry",
  "emergency": "urgentCare",

}

const Doctors = {
  France: {
    generalPractice: ["1xjh", "2shf"],
    hospitals: ["asjkh", "asky"],
    urgentCare: ["hgie", "siuf"],
    pediatrician: ["fgsu"],
    OBGYN: ["ouehv", "apple"],
    dental: ["banana"],
    optometry: ["peach"],
    //chiropractice: [],
    //physicalTherapy: []
  },
  Mexico: {
    generalPractice: ["oias", "asiou"],
    hospitals: ["askh", "askys"],
    urgentCare: ["aisdy", "asioy"],
    pediatrician: ["asiy"],
    OBGYN: ["asjk"],
    dental: ["asd"],
    optometry: ["absf"],
    //chiropractice: [],
    //physicalTherapy: []
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 500,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

//finish building the searchKeys database
//maybe use set(keywords) for keys ex. ["broken bones", "bones", "bone"] tradeoff: run time
//get doctors info according their id from API
//sort doctors by distance