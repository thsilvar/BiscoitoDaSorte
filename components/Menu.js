import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Biscoito from './Biscoito';
import Horoscopo from './Biscoito';


const BiscoitoRoute = () =><View><Biscoito/></View>;
 

const HoroscopoRoute = () => <Horoscopo/>;

const RecentsRoute = () => <Text>Recents</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'biscoito', title: 'Biscoito da Sorte', icon: 'cookie' },
    { key: 'horoscopo', title: 'Horoscopo', icon: 'horoscope' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    biscoito: BiscoitoRoute,
    horoscopo: HoroscopoRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;