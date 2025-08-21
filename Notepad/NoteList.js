import { FlatList } from "react-native";
import NoteItem from "./NoteItem";

function renderNoteItem(itemData) {
  return <NoteItem {...itemData.item} />;
}

function NoteList({ note }) {
  return (
    <FlatList
      data={note}
      renderItem={renderNoteItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default NoteList;
/*
   <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <NoteItem id={item.id} title={item.title} />}
    />
    
    */
