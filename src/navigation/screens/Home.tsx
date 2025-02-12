import { Button, Text } from '@react-navigation/elements';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export function Home() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Some inspirations</Text>
      <Text>Daily Horoscope</Text>
      
      <Button 
        /*style={[styles.button]} */
        screen="Profile" 
        params={{ zodiac: 'Aries' }}>
        Aries
      </Button>
      <Button 
        screen="Profile" 
        params={{ zodiac: 'Taurus'}}>
        Taurus
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    textAlign: "center"
  },
  button: {
    fontWeight: "bold",
  }
});