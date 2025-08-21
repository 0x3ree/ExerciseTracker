import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants/Styles";

function NoteItem({ id, title }) {
  const navigation = useNavigation();
  function noteItemHandler() {
    navigation.navigate("ManageRestplanScreen", {
      noteId: id,
    });
  }
  return (
    <Pressable
      onPress={noteItemHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.noteItem}>
        <View style={styles.noteContainer}>
          <Text style={styles.textBase}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NoteItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  noteContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textBase: {
    color: GlobalStyles.color.primary1,
    fontSize: 16,
    fontWeight: "bold",
  },
  noteItem: {
    marginBottom: 30,
    padding: 12,
    margin: 8,
    marginVertical: 8,
    backgroundColor: GlobalStyles.color.primary001,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    /* for IOS
      shadowColor: GlobalStyles.color.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:0.4
    */
  },
});
