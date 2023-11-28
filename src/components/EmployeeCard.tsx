// src/components/EmployeeCard.tsx

import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface EmployeeCardProps {
  pictureUrl: string;
  name: string;
  role: string;
  available: number;
  all: number;
  used: number;
  updateLeaveStatus: (used: number, available: number) => void;
  selectedFrom: string | null;
  selectedTo: string | null;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  pictureUrl,
  name,
  role,
  available,
  all,
  used,
  updateLeaveStatus,
  selectedFrom,
  selectedTo,
}) => {
  const navigation = useNavigation();

  // Handle leave update logic
  // ...

  React.useEffect(() => {
    if (selectedFrom && selectedTo) {
      const startDate = new Date(selectedFrom);
      const endDate = new Date(selectedTo);
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const usedDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      // Calculate new values for used and available days
      const newUsedDays = used + usedDays;
      const newAvailableDays = all - newUsedDays;

      // Update leave status
      updateLeaveStatus(newUsedDays, newAvailableDays);
    }
  }, [selectedFrom, selectedTo, used, all, updateLeaveStatus]);

  // ...



  const handleLeaveRequest = () => {
    // Navigate to LeaveRequestScreen when the button is pressed
    navigation.navigate('LeaveRequest', { updateLeaveStatus });
  };

  console.log('Used days:', used);
  console.log('Available days:', available);


  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pictureUrl }} style={styles.image} />
      </View>      
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.lightWeight}>{role}</Text>
          </View>
          <TouchableOpacity onPress={handleLeaveRequest}>
            <Text style={styles.plusButton}>➕</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalSeparator}></View> 
        
        <View style={styles.textContainer}>
          <View style={styles.imageContainer}>
          <Text style={styles.statusText}>Available </Text>
          <Text style={styles.daysText}>{available} days</Text>
          </View>

          <View style={styles.verticalSeparator}></View> 
          <View style={styles.imageContainer}>
          <Text style={styles.statusText}>All </Text>
          <Text style={styles.daysText}>{all} days</Text>
          </View>

          <View style={styles.verticalSeparator}></View> 
          <View style={styles.imageContainer}>
          <Text style={styles.statusText}>Used </Text>
          <Text style={styles.daysText}>{used} days</Text>
          </View>
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    height: 200,
    width: 300,
   justifyContent: 'flex-start', // Move the container to the top
    flexDirection: 'column',
    top:5
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusText: {
    marginRight: 10,
    fontSize:14,
    color:'grey'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  plusButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameText:{
    fontSize:22,
    fontWeight:'bold',
    color:'black'
  },
  horizontalSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Adjust the color of the separator line
    width: '100%', // Make the separator line span the full width
    marginBottom: 10, // Add some margin at the bottom of the separator
    marginTop:10
  },
  verticalSeparator: {
      borderRightWidth: 1,
      borderRightColor: '#E0E0E0', // Adjust the color of the vertical separator
      height: '80%', // Make the vertical separator span most of the container height
      marginRight: 10, // Add some margin to the right of the vertical separator
  },
  daysText:{
    fontSize:12,
    fontWeight:"bold",
  },
  lightWeight:{
    fontSize:14,
    color:'grey'
  }
});

export default EmployeeCard;
