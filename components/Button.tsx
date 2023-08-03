import { GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../colors";

type ButtonType = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
}

function Button({ label, onPress }: ButtonType) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* className="rounded-xl bg-[#868788] px-6 py-3 items-center justify-center" */}
      <Text style={styles.text}>
        {/* className="text-white text-base font-medium font-[Raleway]" */}
        {label}
      </Text>
    </Pressable>
  );
}

export { Button };

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: colors["btn-background"],
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "Raleway",
  },
});
