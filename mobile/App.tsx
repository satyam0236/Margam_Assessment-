import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  useColorScheme,
  Platform,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { CourseCard } from './src/components/CourseCard';
import { SearchBar } from './src/components/SearchBar';
import { mockCourses } from './src/data/courses';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchQuery, setSearchQuery] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  };

  const textStyle = {
    color: isDarkMode ? '#f8fafc' : '#1e293b',
  };

  const filteredCourses = mockCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle} edges={['top', 'left', 'right']}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <View style={[styles.header, { borderBottomColor: isDarkMode ? '#334155' : '#e2e8f0' }]}>
          <Text style={[styles.headerTitle, textStyle]}>AI Learner</Text>
          <Text style={[styles.headerSubtitle, { color: isDarkMode ? '#94a3b8' : '#64748b' }]}>Welcome back!</Text>
        </View>

        <View style={styles.content}>
          <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

          <Text style={[styles.sectionTitle, textStyle]}>Your Learning Path</Text>

          <FlatList
            data={filteredCourses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CourseCard course={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No courses found matching "{searchQuery}"</Text>
              </View>
            }
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    paddingBottom: 40,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#64748b',
    fontSize: 15,
  },
});

export default App;
