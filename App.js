import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.topSection}>
        <Image
          source={require("./assets/icon.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Your Home Hero</Text>
      </View>
      {/* White Curved Box */}
      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.bottomText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1877F2", // Facebook blue
    alignItems: "center",
  },
  topSection: {
    marginTop: 60,
    alignItems: "center",
  },
logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  tagline: {
    marginTop: 10,
    fontSize: 18,
    color: "#fff",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 20,
    marginTop: 40,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#1877F2",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
forgotText: {
    color: "#1877F2",
    textAlign: "center",
    marginTop: 15,
  },
bottomSection: {
    marginTop: 30,
    alignItems: "center",
  },
bottomText: {
    color: "#fff",
    fontSize: 14,
  },
  signUpText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textDecorationLine: "underline",
  },
});