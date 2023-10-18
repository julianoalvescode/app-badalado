import { FlatList, View } from "react-native";
import { EmptyList, Participant } from "..";
import { styles } from "./styles";
import * as I from "./types";

export function ParticipantList({ onDelete, participants }: I.ParticipantList) {
  return (
    <View style={styles.container}>
      <FlatList
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item?.id}
            name={item?.name}
            id={item?.id}
            onDelete={() => onDelete(item?.id)}
          />
        )}
        keyExtractor={(item) => item?.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
