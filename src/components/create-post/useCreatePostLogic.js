import React from "react";
import cloudinaryUpload from "../../services/cloudinary-upload";

export default function useCreatePostLogic() {
  const [files, setFiles] = React.useState([]);
  const [previews, setPreviews] = React.useState([]);

  function handleFileChange(e) {
    const selectedFiles = Array.from(e.target.files || []);

    const validFiles = selectedFiles.filter(
      (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
    );

    const previewData = validFiles.map((file) => ({
      file,
      type: file.type.startsWith("image/") ? "image" : "video",
      url: URL.createObjectURL(file),
    }));

    // Revoke old URLs to prevent memory leaks
    previews.forEach((prev) => URL.revokeObjectURL(prev.url));

    setFiles(validFiles);
    setPreviews(previewData);
  }

  async function handlePostSubmit(e) {
    e.preventDefault();

    if (files.length === 0) return;

    const uploaded = [];

    for (const file of files) {
      try {
        const res = await cloudinaryUpload({ file, folder: "posts" });
      } catch (err) {
        console.error("Upload error:", err);
      }
    }

    console.log("All uploads done:", uploaded);
  }

  function removePreview(index) {
    // Revoke URL BEFORE removing from array
    URL.revokeObjectURL(previews[index].url);

    // Remove from both arrays to keep them in sync
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);

    setFiles(newFiles);
    setPreviews(newPreviews);
  }

  React.useEffect(() => {
    return () => {
      previews.forEach((prev) => URL.revokeObjectURL(prev.url));
    };
  }, [previews]);
  return { handlePostSubmit, previews, handleFileChange, removePreview };
}
