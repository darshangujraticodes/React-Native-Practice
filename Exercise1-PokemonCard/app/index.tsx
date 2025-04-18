import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PokemonCard from "./components/PokemonCard";

import { IconData } from "@/assets/images/icon/IconImageExport";
import { ImageData } from "@/assets/images/ImageExport";

export default function Index() {
  return (
    <SafeAreaView style={indexStyle.safeViewContainer}>
      <ScrollView>
        <View>
          <View>
            <PokemonCard
              pokeName="Charmendar"
              pokeHealth={45}
              pokeImg={ImageData.logo1}
              pokeTypeIcon={IconData.fireIcon}
              pokeType="Fire"
              pokeMoves="FireFlame, Bite Attack"
              pokeWeakness="Water, Rock"
              style={{ borderColor: "red" }}
            />

            <PokemonCard
              pokeName="Pikachu"
              pokeHealth={60}
              pokeImg={ImageData.logo2}
              pokeTypeIcon={IconData.thunderIcon}
              pokeType="Thunder"
              pokeMoves="Iron Tail, ThunderShock"
              pokeWeakness="Rock, Grass"
              style={{ borderColor: "gold" }}
            />

            <PokemonCard
              pokeName="Squirtle"
              pokeHealth={85}
              pokeImg={ImageData.logo3}
              pokeTypeIcon={IconData.waterIcon}
              pokeType="Water"
              pokeMoves="Water Gun, Rapid Spin"
              pokeWeakness="Electric, Fire"
              style={{ borderColor: "blue" }}
            />

            <PokemonCard
              pokeName="Bulbasaur"
              pokeHealth={74}
              pokeImg={ImageData.logo4}
              pokeTypeIcon={IconData.plantIcon}
              pokeType="Plants"
              pokeMoves="Vine Whip, Razor Leaf"
              pokeWeakness="Fire, Rock"
              style={{ borderColor: "green" }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const indexStyle = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 10,
    backgroundColor: "#f5f5f5",
  },
});
