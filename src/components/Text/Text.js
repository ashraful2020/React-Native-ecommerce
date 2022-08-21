import { StyleSheet, Text as NewText } from "react-native";
import React from "react";
import { presets } from "./text.preset";

const Text = ({ children, preset, style }) => {
  const textStyle = StyleSheet.compose(presets[preset], style);
  return <NewText style={textStyle}>{children}</NewText>;
};

export default Text;
