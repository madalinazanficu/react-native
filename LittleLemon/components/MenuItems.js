import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

// MenuItems folosind ScrollView
const menuItemsToDisplay = [
  'Hummus \nMoutabal \nFalafel \nMarinated Olives \nKofta \nEggplant Salad \nLentil Burger \nSmoked Salmon \nKofta Burger \nTurkish Kebab \nFries \nButtered Rice \nBread Sticks \nPita Pocket \nLentil Soup \nGreek Salad \nRice Pilaf \nBaklava \nTartufo \nTiramisu \nPanna Cotta',
];


const MenuItems = () => {
  return (
    <View style={menuStyles.container}>
      <ScrollView
        horizontal={false}
        indicatorStyle={'white'}
        style={menuStyles.innerContainer}>
        <Text style={menuStyles.headerText}>View</Text>
        <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
};


// MenuItems folosind FlatList
const menuItemsToDisplay2 = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
  ];

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);


const MenuItems2 = () => {
    const renderItem = ({ item }) => <Item name={item.name} price = {item.price} />;
    return (
      <View style={menuStyles.container}>
        <Text style={menuStyles.headerText}>View Menu</Text>
        <FlatList
          data={menuItemsToDisplay2}
          renderItem={renderItem}></FlatList>
      </View>
    );
};


const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'black',
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
});


export default MenuItems2;
