import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const CustomTextInput = ({ placeholder }) => {
  const primaryBorderColor = "#fff";
  const focusBorderColor = "#FAA958";
  const [borderColor, setBorderColor] = useState(primaryBorderColor);

  return (
    <View style={{ ...styles.inputGroup, borderColor }}>
      <TextInput
        onFocus={() => setBorderColor(focusBorderColor)}
        onBlur={() => setBorderColor(primaryBorderColor)}
        style={styles.input_text}
        placeholder={placeholder}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    padding: 3,
    paddingLeft: 10,
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 10,
    marginBottom: 22,
    color: "#fff",
  },
  
  input_text: {
    color: '#f1f1f1',
  }
});

export default CustomTextInput;