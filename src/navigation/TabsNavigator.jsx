import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStackNavigator from './CartStackNavigator';
import ShopStackNavigator from './ShopStackNavigator';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName='Shop'
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name="storefront-sharp"
              size={32}
              color={focused ? colors.black : colors.mediumGray}
            />
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            <MaterialCommunityIcons
              name="cart-heart"
              size={32}
              color={focused ? colors.black : colors.mediumGray}
            />
        }}
      />
    </Tab.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBar: {
    height: 80
  }
})