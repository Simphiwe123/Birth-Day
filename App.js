import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import MarqueeText from 'react-native-marquee';

const image = { uri: "https://www.icegif.com/wp-content/uploads/happy-birthday-icegif-6.gif" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>To Simphiwe Mkhonza</Text>

      <MarqueeText
          style={{  color: "white",
          fontSize: 30,
          lineHeight: 64,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#000000c0" }}
          speed={0.5}
          marqueeOnStart={true}
          loop={true}
          delay={1000} 
        >
         I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!
        </MarqueeText>
        <Text style={styles.text}>Hope your day goes great!</Text>
    </ImageBackground>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  txt: {
    color: "white",
    fontSize: 30,
    lineHeight: 64,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }

});

export default App;