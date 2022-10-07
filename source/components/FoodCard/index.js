import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../../theme/Dimension';

const FoodCard = ({foods}) => {
  return (
    <View style={styles.container}>
      <Image
        defaultSource={require('../../assets/img/image_food.png')}
        source={{uri: foods.url_image_absolute}}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{foods.food_name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  image: {
    width: WIDTH * 0.2,
    height: HEIGHT * 0.09,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
});

export default FoodCard;
