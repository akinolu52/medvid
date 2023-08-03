import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";
import img from "../assets/images/img.png";

type MedicalReportType = {
    hasImage?: boolean
}

function MedicalReport({hasImage}: MedicalReportType) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        View Medical Report
      </Text>

      <View style={styles.imageContainer}>
        <View style={styles.noReport}>
          <Image source={img} style={styles.noImage} />
        </View>
      </View>
    </View>
  );
}

export { MedicalReport };


const styles = StyleSheet.create({
  container: {
    // borderRadius: 12,
    // backgroundColor: colors["btn-background"],
    // paddingHorizontal: 24,
    // paddingVertical: 12,
    // alignItems: "center",
    justifyContent: "center",
  },
  // "text-[#071939] font-semibold text-xs font-[Roboto] text-left"
  title: {
    color: colors["primary-100"],
    fontWeight: "500",
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  // className="items-center justify-center mt-[14px] "
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  // className="border-[0.5px] border-[#0000003b] py-[37px] px-[20px]"
  noReport: {
    borderWidth: 0.5,
    borderColor: colors.black,
    opacity:0.2,
    paddingVertical: 37,
    paddingHorizontal: 20,
  },
  // className="w-[103px] h-[100px]"
  noImage: {
    width: 103,
    height: 100
  },
});
