import { View, Text, Pressable, StyleSheet } from "react-native";

function Daystiles({ title, color, onSelect }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
        onPress={onSelect}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}> {title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Daystiles;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
