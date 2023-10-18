import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import * as I from "./types";

export function Participant({
  name = "",
  onDelete = () => {},
}: I.ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
