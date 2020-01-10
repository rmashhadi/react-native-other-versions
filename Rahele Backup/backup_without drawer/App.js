import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import infoSender from "./ActionReducer/reducer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogIn from "./components/LogIn";
import ConversationList from "./components/ConversationList";
const store = createStore(infoSender);

const RootStack = createStackNavigator(
  {
    Home: LogIn,
    Details: ConversationList
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

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
