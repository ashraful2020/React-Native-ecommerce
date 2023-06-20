import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  SliderComponent,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <ImageBackground
          style={{ flex: 1, color: "//#endregion  fff" }}
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          resizeMode="cover"
        >
          <Text style={styles.text}>Inside</Text>
          <Text>This is Home screen </Text>
          <Text style={{ padding: 40, color: "#fff" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            maxime aperiam porro ipsa sed perferendis exercitationem vero
            incidunt rem cupiditate eligendi reiciendis a vitae aliquid ratione,
            eos veritatis praesentium in.
          </Text>
          <Text style={{ color: "#fff", padding: 10 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
            aspernatur ea enim harum est beatae natus omnis placeat praesentium
            molestiae ipsum architecto tenetur commodi autem, suscipit id
            mollitia provident officia!
          </Text>
        </ImageBackground>

        <Image
          source={require("../../assets/icon.png")}
          style={{ width: 200, height: 200 }}
        />
        <ActivityIndicator />
        <Pressable
          onPress={() => {
            Alert.alert("Pressed");
          }}
        >
          <Text>I'm pressable!</Text>
        </Pressable>
        {/* Modal section  */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Hello World! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vitae voluptas assumenda tempore voluptate quidem, ullam
                illo nobis aliquid? Voluptatem molestiae eius iure sint sit esse
                quae amet molestias ut officia?
              </Text>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={[styles.button, styles.buttonClose]}
              >
                <Text style={styles.textStyle}> X </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <TextInput placeholder="Username" style={styles.textInput} />
              <View style={styles.btnContainer}>
                <Button title="Submit" onPress={() => null} />
              </View>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        {/* Image background  */}
      </Pressable>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    position: "absolute",
    right: -15,
    top: -10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
