import React from "react";
import Home from "../screen/Home";
import ProductDetails from "../screen/ProductDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tshirt from "../screen/t-shirt";
import Sweater from "../screen/Sweater";
import Shirt from "../screen/Shirt";
import Cart from "../screen/Cart";
import CheckOut from "../screen/CheckOut";

const HomeStack = createNativeStackNavigator();

export function HomeScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={ProductDetails} />
    </HomeStack.Navigator>
  );
}

const TshirtStack = createNativeStackNavigator();
export function TshirtScreen() {
  return (
    <TshirtStack.Navigator screenOptions={{ headerShown: false }}>
      <TshirtStack.Screen name="Tshirt" component={Tshirt} />
      <TshirtStack.Screen name="Details" component={ProductDetails} />
    </TshirtStack.Navigator>
  );
}
const ShirtStack = createNativeStackNavigator();
export function ShirtScreen() {
  return (
    <ShirtStack.Navigator screenOptions={{ headerShown: false }}>
      <ShirtStack.Screen name="Shirt" component={Shirt} />
      <ShirtStack.Screen name="Details" component={ProductDetails} />
    </ShirtStack.Navigator>
  );
}
const SweaterStack = createNativeStackNavigator();
export function SweaterScreen() {
  return (
    <SweaterStack.Navigator screenOptions={{ headerShown: false }}>
      <SweaterStack.Screen name="Sweater " component={Sweater} />
      <SweaterStack.Screen name="Details" component={ProductDetails} />
    </SweaterStack.Navigator>
  );
}
const CartStack = createNativeStackNavigator();
export function CartScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="CheckOut" component={CheckOut} />
    </CartStack.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export function Screen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sweater " component={Sweater} />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}
