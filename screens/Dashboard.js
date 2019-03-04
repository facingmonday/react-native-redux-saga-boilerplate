import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../hocs/Footer';

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title={'Login'}/>
        </View>
        <ScrollView style={styles.body}>
          <Text>Dashboard</Text>
        </ScrollView>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  header: {

  },
  body: {
    flex: 1
  },
  footer: {
    height: 50,
  }
})
export default Dashboard;
