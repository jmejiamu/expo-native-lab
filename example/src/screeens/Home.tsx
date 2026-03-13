import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/MainNav";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type DemoItem = {
  key: keyof RootStackParamList;
  title: string;
  subtitle: string;
};

const screens: DemoItem[] = [
  {
    key: "NetworkInspector",
    title: "Network Inspector",
    subtitle: "Capture and inspect outgoing HTTP/HTTPS requests in real time.",
  },
];

const Home = () => {
  const navigation = useNavigation<NavigationProp>();

  const renderItem = ({ item }: ListRenderItemInfo<DemoItem>) => (
    <View style={styles.card}>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.cardButton,
          pressed && styles.cardButtonPressed,
        ]}
        onPress={() => navigation.navigate(item.key)}
      >
        <Text style={styles.cardButtonText}>Open</Text>
      </Pressable>
    </View>
  );

  const keyExtractor = (item: DemoItem) => item.key;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Demo Gallery</Text>
        <Text style={styles.subtitle}>
          Explore the native module demos included in this project.
        </Text>
      </View>

      <FlatList
        data={screens}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: "#6B7280",
  },
  listContent: {
    paddingHorizontal: 24,
    paddingVertical: 18,
    paddingBottom: 32,
    gap: 14,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardText: {
    flex: 1,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
  },
  cardSubtitle: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: "#6B7280",
  },
  cardButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "#111827",
  },
  cardButtonPressed: {
    opacity: 0.85,
  },
  cardButtonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
