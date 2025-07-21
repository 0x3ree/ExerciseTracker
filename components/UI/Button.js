import { StyleSheet, Pressable, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

function Button({ children, onPress, style }) {
  return (
    // in here we use the style prop  to pass the style from the parent component to the button component(in this case where we might want to
    //  add extra styls to the button component that wasn't added in its original form)
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.color.primary001,
  },
  //flat: { backgroundColor: "transparent" } view buttn,

  buttonText: {
    color: GlobalStyles.color.primary1,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.color.primary100,
    borderRadius: 4,
  },
});
