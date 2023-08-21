import { Image, StyleSheet, Text, View } from "react-native";
import checkDone from "../assets/images/check-done.png";
import check from "../assets/images/check.png";
import progress from "../assets/images/progress.png";
import { colors } from "../colors";

type ProgressType = {
  count: number,
  loading: boolean
}

function Progress({ count, loading }: ProgressType) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={progress} style={[styles.progress, { width: `${count}%` }]} />

        <Text style={[styles.text, { width: `${count}%` }]}>{count > 14 ? `${count}%` : ""}</Text>
      </View>

      <Image source={count > 0 && loading ? checkDone : check} style={styles.check} />
    </View>
  );
}

export { Progress };


const styles = StyleSheet.create({
  // mb-11 flex-row items-center justify-center gap-[1px] border border-red-500 w-full
  container: {
    marginBottom: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    width: "100%",
    // borderRadius: 12,
    // backgroundColor: colors["btn-background"],
    // paddingHorizontal: 24,
    // paddingVertical: 12,
    // borderWidth: 1,
  },
  // className="relative border border-red-500 w-1/2 h-[18px] items-start rounded overflow-hidden"
  content: {
    position: "relative",
    width: "70%",
    height: 18,
    //   alignItems: "center",
    justifyContent: "center",

    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: colors["progress-background"],
  },
  // className="w-full h-[18px]" 
  progress: {
    width: "100%",
    height: 18,
  },
  //  className="text-xs text-red-500 absolute"
  text: {
    color: colors.white,
    fontSize: 12,
    letterSpacing: -0.154,
    // lineHeight: 21,
    fontWeight: "500",
    fontFamily: "DMSans",
    position: "absolute",
    //   width: '100%',
    textAlign: "center",
  },
  //   className="w-[15px] h-[15px] border border-red-500"
  check: {
    width: 15,
    height: 15
  }
});
