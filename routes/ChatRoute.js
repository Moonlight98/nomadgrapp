import { createStackNavigator } from "react-navigation";
import ChatScreen from "../screens/ChatScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";
 
const ChatRoute = createStackNavigator(
  {
    Chat: {
      screen: ChatScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default ChatRoute;