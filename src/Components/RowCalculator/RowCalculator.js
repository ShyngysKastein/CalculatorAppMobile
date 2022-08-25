import React from "react";
import { View } from "react-native";

const RowCalculator =  ({ children }) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);

export default RowCalculator;
