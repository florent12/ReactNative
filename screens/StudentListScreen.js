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

// Imports...

const styles = StyleSheet.create({
  // Styles communs
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  searchInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
});



export default StudentListScreen;
