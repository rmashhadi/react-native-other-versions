import React from "react";
import LogIn from "./components/LogIn";
import ConversationList from "./components/ConversationList";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "./screens/Setting";
import infoSender from "./ActionReducer/reducer";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(infoSender);

const LogInNavigator = createStackNavigator(
  {
    Home: LogIn
    // Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      }
    }
  }
);
const ConversationListNavigator = createStackNavigator(
  {
    Settings: ConversationList
    // Details: DetailsScreen
  },
  {
    // initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      }
    }
  }
);
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: LogInNavigator
  },
  Details: {
    screen: ConversationListNavigator
  }
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
