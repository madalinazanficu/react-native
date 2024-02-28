import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
    {
        title : 'Appetizers',
        data : [
            { name: 'Hummus', price : '$5.00'},
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
          { name: 'Lentil Burger', price: '$10.00' },
          { name: 'Smoked Salmon', price: '$14.00' },
          { name: 'Kofta Burger', price: '$11.00' },
          { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
          { name: 'Fries', price: '$3.00', id: '11K' },
          { name: 'Buttered Rice', price: '$3.00' },
          { name: 'Bread Sticks', price: '$3.00' },
          { name: 'Pita Pocket', price: '$3.00' },
          { name: 'Lentil Soup', price: '$3.75' },
          { name: 'Greek Salad', price: '$6.00' },
          { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
]

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);


const SectionMenuItems = () => {
    const renderItem = ({item}) => <Item name = {item.name} price = {item.price} />

    const renderSectionHeader = ({ section : {title}}) => (
        <Text style = {menuStyles.sectionHeader}> {title} </Text>
    )

    return (
        <View style = {menuStyles.container}>
            <SectionList
            sections = {menuItemsToDisplay}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}>
            </SectionList>
        </View>
    )

}

const menuStyles = StyleSheet.create({
    container: {
      flex: 0.95,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: '#333333',
      flexDirection : 'row',
      justifyContent : 'space-between',
    },
    sectionHeader: {
      backgroundColor: '#fbdabb',
      color: '#333333',
      fontSize: 34,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: '#F4CE14',
      fontSize: 32,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#EDEFEE',
    },
    footerText: {
      color: '#EDEFEE',
      fontSize: 20,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
  });

export default SectionMenuItems;