import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const FILTERS = ["All", "Completed", "Pending"];

const TaskFilters = ({ selectedFilter, onSelectFilter }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      {FILTERS.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.filterButton,
            { backgroundColor: selectedFilter === filter ? theme.primary : theme.background },
          ]}
          onPress={() => onSelectFilter(filter)}
        >
          <Text style={[styles.filterText, { color: theme.text }]}>{filter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TaskFilters;
