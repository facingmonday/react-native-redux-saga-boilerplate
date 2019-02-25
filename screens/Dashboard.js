import React from 'react';
import { Container, Content, Item, Input, Text } from 'native-base';
import Header from '../components/Header';
import Footer from '../hocs/Footer';

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Header title={'Login'}/>
        <Content>
          <Text>Dashboard</Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default Dashboard;
