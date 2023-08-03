import { StyleSheet, Text } from "react-native";
import { colors } from "../colors";

function Instruction() {
  return (
    <Text style={styles.title}>
        Please complete the whole process by uploading the necessary
        pictures in each individual section before clicking save.
    </Text>
  );
}

export { Instruction };

const styles = StyleSheet.create({
  //  className="text-[#262626] text-sm font-[Roboto] text-center mx-7 mt-7"
  title: {
    color: colors["universal-black-100"],
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "Roboto",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 28,
  },
   
});
  