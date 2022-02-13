import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { fruits } from './fruits';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    marginBottom: 15,
  },
  containerLastChild: {
    marginBottom: 0,
  },
  initialCardStyle: {
    height: 150,
    borderRadius: 10,
  },
  paragraph: {
    padding: 2,
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    bottom: 5,
    left: 5,
    zIndex: 9999,
  },
});

const MyCard = (props) => {
  const { fruit, index, length } = props;

  console.log(index, length);

  const expandedStyle = {
    ...styles.initialCardStyle,
    height: 300,
    width: '100%',
    objectFit: 'cover',
  };

  const [toggle, setToggle] = React.useState(false);

  const onClickHandler = () => {
    setToggle(!toggle);
  };
  
  const fruitName = `${fruit.name[0].toUpperCase()}${fruit.name.substring(1)}`;

  return (
    <Pressable onPress={onClickHandler}>
      <Card
        style={
          (index !== length - 1) ? styles.container : styles.containerLastChild
        }>
        <Text style={styles.paragraph}>{fruitName}</Text>
        <Card.Cover
          style={toggle ? expandedStyle : styles.initialCardStyle}
          source={{ uri: fruit.image }}
        />
      </Card>
    </Pressable>
  );
};

export default MyCard;
