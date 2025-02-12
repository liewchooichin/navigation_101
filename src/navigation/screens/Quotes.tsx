import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Image } from "expo-image";

import initialImage from "../../assets/emoji5.png";

export function Quotes() {
  // states
  const [quote, setQuote] = useState("Quote");
  const [author, setAuthor] = useState("Author");
  const [imageSource, setImageSource] = useState(initialImage);
  // fetch api
  const URL_QUOTE = "https://zenquotes.io/api/image/";
  const RANDOM_KEY = 9001;

  async function getApi(){
    const response = await fetch(URL_QUOTE);
    const blobData = await response.blob();
    const objectUrl = URL.createObjectURL(blobData);
    setImageSource(objectUrl);
  }

  // use effect
  useEffect(
    () => { getApi() },
    []
  );

  return (
    <View style={styles.container}>
  
      <View style={[styles.imageContainer]}>
      <Image
        style={[styles.image]}
        source={imageSource}
      ></Image>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  imageContainer: {
    //flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  image: {
    width: "100%",
    height: "100%",
    //objectFit: "cover",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    margin: 15,
    fontSize: 20,
    lineHeight: 35,
  },
  buttonContainer: {
    flex: 1,
    //width: 80,
    //height: 28,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    //height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "blue",
    padding: 10,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 28,
  },
});
