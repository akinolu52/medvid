/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";

// type VideoType = undefined | null | Record<string, string | number>;

const UPLOAD_URL = "http://10.0.2.2:8000/action-recognition/";

function useApp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<object | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [hasVideo, setHasVideo] = useState<boolean>(false);

  // const [video, setVideo] = useState<VideoType>(null);

  const handleUpload = async (video: any) => {
    console.log("upload ", video);
    setLoading(true);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: function (progressEvent: any) {
        const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentage);
      },
    };

    const formData = new FormData();
    formData.append("video_file", {
      name: "name.mp4",
      uri: video.uri,
      type: "video/mp4"
    });

    try {
      const res = await axios.post(UPLOAD_URL, formData, config);
      setResult(res?.data);
      setHasVideo(true);
    } catch (error: any) {
      console.log("error ", error);
      setError(error.response);
    } finally {
      setLoading(false);
    }
  };

  const selectVideo = async () => {
    const res = await launchImageLibrary({
      mediaType: "mixed",
      selectionLimit: 1,
    });
    return res?.assets?.[0];

    // setVideo(_result as unknown as any);
    // console.log("res ", res?.assets?.[0]);
  };

  return {
    handleUpload,
    selectVideo,
    hasVideo,
    loading,
    result,
    error,
    progress,
  };
}

export default useApp;