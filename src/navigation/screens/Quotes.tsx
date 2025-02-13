import { Text } from '@react-navigation/elements';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Image } from "expo-image";


// Image URL
const IMAGE_URL_START = "https://zenquotes.io/api/image/";
const QUOTE_URL = "https://zenquotes.io/api/quotes/";

// get a random key for the quote image generation
function randomKey(){
  return (Math.floor(Math.random() * 1000000));
}
// create the random key url
function getRandomImageUrl(){
  return (IMAGE_URL_START + `${randomKey()}`);
}

export function Quotes() {

  // states
  // for the image source
  const [sourceUrl, setSourceUrl] = useState(IMAGE_URL_START);
  // get an array of quotes, if user wants to get a new quote,
  // get it from the array.
  const [quoteArray, setQuoteArray] = useState([]);
  // a single quote from the array
  const [singleQuote, setSingleQuote] = useState("");
  const [singleAuthor, setSingleAuthor] = useState("");
  // index into the quote array
  const [quoteIndex, setQuoteIndex] = useState(0);
  // state of loading the api
  const [isLoading, setIsLoading] = useState(false);

  async function getQuoteApi(){
    try{
      setIsLoading(true);
      const response = await fetch(QUOTE_URL);
      const jsonData = await response.json();
      setQuoteArray(jsonData);
      setSingleQuote(jsonData[0]["q"]);
      setSingleAuthor(jsonData[0]["a"]);
    } 
    catch(err){
      console.log("Error in fetching quotes.")
    } 
    finally {
      setIsLoading(false);
    }
  }
  // load the quote array
  useEffect(
    () => {getQuoteApi()},
    []
  );

  // get the next quote
  function getNextQuote(){
    // get the quote array size
    const len = quoteArray.length;
    let nextIndex = quoteIndex + 1;
    // if the index is already at the last
    // index, reset it to the beginning
    if (nextIndex > len){
      nextIndex = 0;
    }
    setQuoteIndex(nextIndex);
    setSingleQuote(quoteArray[quoteIndex]["q"]);
    setSingleAuthor(quoteArray[quoteIndex]["a"]);
  }
  

  return (
    <ScrollView>
      
      <View style={[styles.container, styles.imageContainer]}>
      <Image
        style={[styles.image]}
        source={{uri: sourceUrl}}
        alt="Loading ..."
      ></Image>
      </View>

      <View style={[styles.buttonContainer]}>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => (setSourceUrl(getRandomImageUrl()))}
      >
        <Text style={[styles.buttonLabel]}>Another image</Text>
      </Pressable>
      </View>

      <View style={[styles.textContainer]}>     
      {
        (isLoading===true) && 
        (
          <Text style={[styles.smalltext]}>Loading ...</Text>
        )
      }
      <Text style={[styles.text]}>
        {singleQuote}
      </Text>
      <Text style={[styles.authorContainer, styles.authorText]}>
        {singleAuthor}
      </Text>
    </View>
    <View style={[styles.buttonContainer]}>
      <Pressable 
        style={[styles.button]}
        onPressIn={() => getNextQuote()}
      >
        <Text style={[styles.buttonLabel]}>Another quote</Text>
      </Pressable>
      </View>
    </ScrollView>
  );
}

// NOTE: The image style need to use resizeMode in order
// to see the whole image.


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  imageContainer: {
    //flex: 1,
  },
  image: {
    width: 356,
    height: 280,
    //resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
  },
  text: {
    margin: 15,
    fontSize: 36,
    lineHeight: 40,
  },
  smalltext: {
    textAlign: "center",
    width: "100%",
    margin: 0,
    fontSize: 14,
  },
  authorContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    gap: 2,
  },
  authorText: {
    margin: 15,
    fontSize: 28,
  },
  buttonContainer: {
    flex: 1,
    //width: 80,
    //height: 28,
    marginHorizontal: 10,
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
