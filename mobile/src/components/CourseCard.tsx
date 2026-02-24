import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#1f2937' : '#ffffff', borderColor: isDarkMode ? '#374151' : '#eaeaea' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDarkMode ? '#f9fafb' : '#111827' }]} numberOfLines={1}>{course.title}</Text>
        <Text style={[styles.instructor, { color: isDarkMode ? '#9ca3af' : '#6b7280' }]}>by {course.instructor}</Text>
      </View>

      <Text style={[styles.description, { color: isDarkMode ? '#d1d5db' : '#4b5563' }]} numberOfLines={2}>
        {course.description}
      </Text>

      <View style={styles.footer}>
        <View style={styles.progressHeader}>
          <Text style={[styles.progressText, { color: isDarkMode ? '#d1d5db' : '#374151' }]}>Progress</Text>
          <Text style={[styles.progressValue, { color: isDarkMode ? '#60a5fa' : '#2563eb' }]}>{course.progress}%</Text>
        </View>
        <View style={[styles.progressBarBg, { backgroundColor: isDarkMode ? '#374151' : '#f3f4f6' }]}>
          <View style={[styles.progressBarFill, { width: `${course.progress}%`, backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb' }]} />
        </View>

        <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? '#374151' : '#f9fafb', borderColor: isDarkMode ? '#4b5563' : '#e5e7eb' }]}>
          <Text style={[styles.buttonText, { color: isDarkMode ? '#f9fafb' : '#111827' }]}>
            {course.progress === 0 ? "Start Course" : "Continue"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  instructor: {
    fontSize: 13,
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  footer: {
    marginTop: 'auto',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 13,
    fontWeight: '500',
  },
  progressValue: {
    fontSize: 13,
    fontWeight: '600',
  },
  progressBarBg: {
    height: 8,
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
