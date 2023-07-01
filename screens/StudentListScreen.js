import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StudentListScreen = () => {
  const navigation = useNavigation();

  const handleEditStudent = () => {};

  const handleDeleteStudent = () => {};

  return (
    <View>
      <Text>Liste des étudiants</Text>
      <Text>{student.name}</Text>
      <Button title="Modifier" onPress={handleEditStudent} />
      <Button title="Supprimer" onPress={handleDeleteStudent} />
    </View>
  );
};

export default StudentListScreen;
