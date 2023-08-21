import { Image, StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";
import img from "../assets/images/img.png";
import { colors } from "../colors";

function MedicalReport({ hasVideo }: { hasVideo: boolean }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        View Medical Report
      </Text>

      <View style={styles.imageContainer}>
        {hasVideo ? (
          <Video
            source={require("../videos/output.mp4")}
            controls
            resizeMode="contain"
            style={styles.backgroundVideo}
          />
        ) : (
          <View style={styles.noReport}><Image source={img} style={styles.noImage} /></View>
        )}
      </View>
    </View>
  );
}

export { MedicalReport };

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    color: colors["primary-100"],
    fontWeight: "500",
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  noReport: {
    borderWidth: 0.5,
    borderColor: colors.black,
    opacity: 0.2,
    paddingVertical: 37,
    paddingHorizontal: 20,
  },
  noImage: {
    width: 103,
    height: 100
  },
  backgroundVideo: {
    // borderWidth: 1,
    // borderColor: "red",
    width: "100%",
    height: 180,

    // width:"100%",
    // height:"100%",
  },
});
