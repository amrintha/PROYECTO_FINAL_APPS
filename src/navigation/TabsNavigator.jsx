import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStackNavigator from './CartStackNavigator';
import ShopStackNavigator from './ShopStackNavigator';

const Tab = createBottomTabNavigator();

const TabsNavigator=()=>{
    return(
    <Tab.Navigator>
      <Tab.Screen name="Shop" component={ShopStackNavigator} />
      <Tab.Screen name="Cart" component={CartStackNavigator} />
    </Tab.Navigator>
    )
}

export default TabsNavigator