import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CartScreen,
  HomeScreen,
  SettingsStackScreen,
  ShirtScreen,
  SweaterScreen,
  TshirtScreen,
} from "./stackScreen";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

function TabBarIcons({ fontFamily, name, color }) {
  if (fontFamily == "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily == "AntDesign") {
    return <AntDesign name={name} size={24} color={color} />;
  } else if (fontFamily == "Entypo") {
    return <Entypo name={name} size={24} color={color} />;
  } else if (fontFamily == "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  }
}

// shirt
{
  // <Ionicons name="homeTab" size={24} color="black" />;
  //<AntDesign name="plusTab" size={24} color="black" />
  //<Entypo name="baiduTab" size={24} color="black" />
}
const Navigation = () => {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarActiveTintColor: "orange",
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcons
                fontFamily={"Ionicons"}
                name={"home"}
                color={color}
              />
            ),
          }}
          name="HomeTab"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            title: "T-shirt",
            tabBarIcon: ({ color }) => (
              <TabBarIcons
                fontFamily={"AntDesign"}
                name={"plus"}
                color={color}
              />
            ),
          }}
          name="TshirtTab"
          component={TshirtScreen}
        />

        <Tab.Screen
          options={{
            title: "Shirt",
            tabBarIcon: ({ color }) => (
              <TabBarIcons
                fontFamily={"Ionicons"}
                name={"shirt"}
                color={color}
              />
            ),
          }}
          name="ShirtTab"
          component={ShirtScreen}
        />

        <Tab.Screen
          options={{
            title: "Sweater",
            tabBarIcon: ({ color }) => (
              <TabBarIcons fontFamily={"Entypo"} name={"baidu"} color={color} />
            ),
          }}
          name="SweaterTab"
          component={SweaterScreen}
        />

        <Tab.Screen
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <TabBarIcons
                fontFamily={"AntDesign"}
                name={"shoppingcart"}
                color={color}
              />
            ),
          }}
          name="CartTab"
          component={CartScreen}
        />
        <Tab.Screen
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <TabBarIcons
                fontFamily={"MaterialCommunityIcons"}
                name={"face-man-profile"}
                color={color}
              />
            ),
          }}
          name="ProfileTab"
          component={CartScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
