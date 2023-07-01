import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleStudentList = () => {
    navigation.navigate("StudentList");
  };

  const handleAddStudent = () => {
    navigation.navigate("AddStudent");
  };

  return (
    <View>
      <Button title="Liste des étudiants" onPress={handleStudentList} />
      <Button title="Ajouter un étudiant" onPress={handleAddStudent} />
    </View>
  );
};

export default HomeScreen;
