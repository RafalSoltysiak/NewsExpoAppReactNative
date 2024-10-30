import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import { StyleSheet, View } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";

type Props = {
  items: NewsDataType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};

export default function Paginations({
  items,
  paginationIndex,
  scrollX,
}: Props) {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                backgroundColor:
                  paginationIndex === index ? Colors.tint : Colors.darkGrey,
              },
            ]}
            key={index}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "#333",
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 8,
  },
});
