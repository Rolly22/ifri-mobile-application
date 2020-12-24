import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { PixelRatio } from "react-native";
import {
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from '../components';

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {
  const insets = useSafeArea();
  const screens = [
    "Accueil",
    "Actualités",
    "Publications",
    "Emploie/Stages",
    "Mon Compte",
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block>
        <Image source={Images.Logo} style={styles.logo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
              return (
                <DrawerCustomItem
                  title={item}
                  key={index}
                  navigation={navigation}
                  focused={state.index === index ? true : false}
                />
              );
            })}

        </ScrollView>
      </Block>
    </Block>
  );
}

/*
<Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
  <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
  <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>DOCUMENTATION</Text>
</Block>
<DrawerCustomItem title="Getting Started" navigation={navigation} />
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center'
  },
  logo: {
    width: PixelRatio.getPixelSizeForLayoutSize(167),
    height: PixelRatio.getPixelSizeForLayoutSize(50)
  }
});

export default CustomDrawerContent;
