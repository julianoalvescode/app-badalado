import { View, Text } from "react-native";

import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nenhum participante adicionado</Text>
    </View>
  );
}
