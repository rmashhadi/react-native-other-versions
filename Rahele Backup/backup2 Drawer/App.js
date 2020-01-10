import React from "react";
import LogIn from "./components/LogIn";
import ConversationList from "./components/ConversationList";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import DetailsScreen from "./screens/Setting";
import HomeScreen from "./screens/HomeScreen";
// const store = createStore(infoSender);

// const RootStack = createStackNavigator(
//   {
//     Home: LogIn,
//     Details: ConversationList
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "black"
//       }
//     }
//   }
// );
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <AppContainer />
      // </Provider>
    );
  }
}
