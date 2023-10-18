import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { ParticipantList } from "../../components";
import { Participant } from "domain/models/participant";
import { useForm } from "react-hook-form";

export default function Home() {
  const [participants, setParticipants] = useState<Participant[] | null>(null);
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    register("name");
  }, [register]);

  function handleParticipantAdd(data: any): void {
    if (!data.name || data.name === "") {
      Alert.alert("Nome inválido", "O nome não pode ser vazio");
      return;
    }
    if (participants?.find((item) => item.name === data?.name)) {
      Alert.alert("Nome inválido", "O nome não pode ser repetido");
      return;
    }

    const newUser = { id: Math.random(), name: data.name };
    setParticipants((prev) => {
      if (!prev) return [newUser];
      return [...prev, newUser];
    });
  }

  function onDelete(id: number): void {
    Alert.alert("Remover participante", "Tem certeza que deseja remover?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        style: "destructive",
        onPress: () => {
          setParticipants((prev) => {
            if (!prev) return null;
            const newParticipants = prev.filter(
              (participant) => participant.id !== id
            );
            return newParticipants.length ? newParticipants : null;
          });
        },
      },
    ]);
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.eventName}>Nome do Evento</Text>
          <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            onChangeText={(text) => setValue("name", text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleParticipantAdd)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <ParticipantList onDelete={onDelete} participants={participants} />
      </View>
    </>
  );
}
