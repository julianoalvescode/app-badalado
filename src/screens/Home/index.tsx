import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./styles";

export default function Home() {
  function handleParticipantAdd(_event: GestureResponderEvent) {
    console.info("handleParticipantAdd");
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
