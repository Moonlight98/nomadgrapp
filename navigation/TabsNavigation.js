import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator, TabBarBottom } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";
import { Ionicons } from "@expo/vector-icons";
import index from "../screens/LogInScreen";
import BoardRoute from "../routes/BoardRoute";

const TabsNavigation = createBottomTabNavigator(
  {
    홈: {
      screen: HomeRoute,
      navigationOptions: {
          tabBarIcon: ({ focused }) => (
              <Ionicons
                 name={focused ? "ios-home" : "ios-home-outline"}
                 size={30}
                 color={"#0545B0"}
                 />
          )
      }
    },
    게시판: {
      screen: BoardRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
            <Ionicons
               name={focused ? "ios-beer" : "ios-beer-outline"}
               size={30}
               color={"#0545B0"}
               />
        )
    }
    },
    AddPhoto: {
        screen: View,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused }) => (
                <Ionicons
                   name={"ios-add-circle-outline"}
                   size={30}
                   color={"#0545B0"}
                   />
                ),
            tabBarOnPress: () => {
                navigation.navigate("TakePhoto");
            },
         }),
    },
    알림: {
      screen: NotificationsRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
            <Ionicons
               name={focused ? "md-heart" : "md-heart-outline"}
               size={30}
               color={"#0545B0"}
               />
        )
    }
    },
    프로필: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
            <Ionicons
               name={focused ? "ios-person" : "ios-person-outline"}
               size={30}
               color={"#0545B0"}
               />
        )
    }
      }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: "#FBFBFB",
            height: 45
        }
    }
  }
);

export default TabsNavigation;