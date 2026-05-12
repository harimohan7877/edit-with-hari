import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(
  file: string,
  folder: string = "portfolio"
) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      resource_type: "auto",
      transformation: [{ quality: "auto", fetch_format: "auto" }],
    });
    return { success: true, url: result.secure_url, publicId: result.public_id };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return { success: false, error };
  }
}

export async function deleteFromCloudinary(publicId: string) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return { success: true, result };
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    return { success: false, error };
  }
}

export function getCloudinaryUrl(
  publicId: string,
  options: { width?: number; height?: number; quality?: string } = {}
) {
  return cloudinary.url(publicId, {
    secure: true,
    quality: options.quality || "auto",
    fetch_format: "auto",
    ...(options.width && { width: options.width }),
    ...(options.height && { height: options.height }),
    crop: "fill",
  });
}

export { cloudinary };