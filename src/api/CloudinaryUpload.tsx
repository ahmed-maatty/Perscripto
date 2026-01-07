import { toast } from "react-toastify";

export default async function CloudinaryUpload(file: File | null) {
  if (!file) return toast.error("Please, Upload Doctor Photo First.");

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    console.error(error);
  }
}
