import {
  Image,
  ImageSourcePropType,
  ImageProps,
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  Platform,
} from "react-native";

type pokeCardType = {
  pokeName: string;
  pokeTypeIcon: ImageProps | undefined;
  pokeType: string;
  pokeHealth: number;
  pokeImg: ImageSourcePropType | undefined;
  pokeMoves: string;
  pokeWeakness: string;
  style: StyleProp<ViewStyle>;
};

import { IconData } from "@/assets/images/icon/IconImageExport";
import { ImageData } from "@/assets/images/ImageExport";

export default function PokemonCard({
  pokeName,
  pokeTypeIcon,
  pokeType,
  pokeHealth,
  pokeImg,
  pokeMoves,
  pokeWeakness,
  style,
}: pokeCardType) {
  return (
    <View style={cardStyle.cardWrapper}>
      <View style={cardStyle.cardUpperHead}>
        <View>
          <Text style={cardStyle.pokemonName}>{pokeName}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={IconData.heartIcon}
            style={{ width: 25, height: 25, marginHorizontal: 3 }}
          />
          <Text style={{ fontSize: 20 }}>HP : {pokeHealth}</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginVertical: 15 }}>
        <Image style={cardStyle.cardImage} source={pokeImg} />
      </View>

      <View style={[cardStyle.pokeTypeViewWrap, style]}>
        <Image source={pokeTypeIcon} style={{ width: 30, height: 30 }} />
        <Text style={cardStyle.pokeTypeText}>{pokeType}</Text>
      </View>

      <View style={cardStyle.cardInfoViewWrap}>
        <Text style={cardStyle.cardInfoText}>Moves : {pokeMoves}</Text>
        <Text
          style={[cardStyle.cardInfoText, { marginTop: 5, marginBottom: 6 }]}
        >
          Weakness : {pokeWeakness}
        </Text>
      </View>
    </View>
  );
}

const cardStyle = StyleSheet.create({
  cardWrapper: {
    margin: 15,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",

    ...Platform.select({
      ios: {
        shadowOffset: { width: 3, height: 3 },
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 7,
      },
    }),
  },
  cardUpperHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pokemonName: {
    fontSize: 26,
    fontWeight: 600,
  },
  pokemonHealth: {},
  cardImage: {
    width: 250,
    height: 250,
  },

  pokeTypeViewWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // columnGap: 5,
    // width: "auto",
    marginHorizontal: "auto",
    borderWidth: 3,
    padding: 8,
    borderRadius: 20,
  },
  pokeTypeText: {
    fontSize: 28,
    fontWeight: 600,
    paddingHorizontal: 10,
  },

  cardInfoViewWrap: {
    marginTop: 20,
  },

  cardInfoText: {
    fontSize: 23,
    fontWeight: 600,
  },
});
