import React from 'react';
import { View, TextInput, StyleSheet, useColorScheme } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
            borderColor: isDarkMode ? '#374151' : '#d1d5db',
            color: isDarkMode ? '#f9fafb' : '#111827',
          }
        ]}
        placeholder="Search for courses..."
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
  },
});
