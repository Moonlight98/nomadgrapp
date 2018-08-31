import { createStackNavigator } from "react-navigation";
import BoardScreen from "../screens/BoardScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

 
const BoardRoute = createStackNavigator(
  {
    Board: {
      screen: BoardScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default BoardRoute;