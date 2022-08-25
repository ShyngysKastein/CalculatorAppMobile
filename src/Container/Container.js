import React,{Component} from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "../Components/RowCalculator/RowCalculator";
import Button from "../Components/BtnCalculator/BtnCalculator";
import calculator, {initialState} from '../../utils';

class Container extends Component {
  state = initialState;

  onClickHandler = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button text="AC" onPress={() => this.onClickHandler("clear")}/>
            <Button text="+/-" onPress={() => this.onClickHandler("posneg")}/>
            <Button text="%" onPress={() => this.onClickHandler("percentage")}/>
            <Button text="/" onPress={() => this.onClickHandler("operator", "/")}/>
          </Row>
          <Row>
            <Button text="7" onPress={() => this.onClickHandler("number", 7)} />
            <Button text="8" onPress={() => this.onClickHandler("number", 8)} />
            <Button text="9" onPress={() => this.onClickHandler("number", 9)} />
            <Button text="x" onPress={() => this.onClickHandler("operator", "*")}/>
          </Row>
          <Row>
            <Button text="4" onPress={() => this.onClickHandler("number", 4)} />
            <Button text="5" onPress={() => this.onClickHandler("number", 5)} />
            <Button text="6" onPress={() => this.onClickHandler("number", 6)} />
            <Button text="-" onPress={() => this.onClickHandler("operator", "-")}/>
          </Row>
          <Row>
            <Button text="1" onPress={() => this.onClickHandler("number", 1)} />
            <Button text="2" onPress={() => this.onClickHandler("number", 2)} />
            <Button text="3" onPress={() => this.onClickHandler("number", 3)} />
            <Button text="+" onPress={() => this.onClickHandler("operator", "+")}/>
          </Row>
          <Row>
            <Button text="0" onPress={() => this.onClickHandler("number", 0)}/>
            <Button text="." onPress={() => this.onClickHandler("number", ".")} />
            <Button text="=" theme="accent" onPress={() => this.onClickHandler("equal")}/>
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

export default Container;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});
