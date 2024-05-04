import React from "react";
import { StatusBar } from "expo-status-bar";
import {  Text, StyleSheet,View } from "react-native";
import { ClerkProvider,SignedIn,SignedOut} from "@clerk/clerk-expo";
import Constants from "expo-constants"
import Login from "./App/Screens/LoginScreen/Login";

export default function App() {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <View style={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});