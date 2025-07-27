import fetchInstance from "../utility/fetchInstance";

/**
 * Uploads a file to Cloudinary using a signed `multipart/form-data` POST request.
 *
 * This function:
 * 1. Fetches a signed upload signature from your backend for the specified folder.
 * 2. Constructs a `FormData` payload including the file and required Cloudinary parameters.
 * 3. Sends a `multipart/form-data` request directly to Cloudinary’s upload API.
 *
 * 🔐 **Note:** The signature must be generated on the backend using the same parameters
 * (e.g., `folder`, `timestamp`, and optionally `eager`) to ensure a valid upload.
 *
 * 📦 **Important:** This request is sent as `multipart/form-data` which is required by
 * Cloudinary's file upload endpoint.
 *
 * @async
 * @function cloudinaryUpload
 * @param {Object} params - Upload parameters.
 * @param {File} params.file - The file (image/video) to upload.
 * @param {string} params.folder - The target Cloudinary folder to upload the file to.
 *
 * @throws {Error} If `file` or `folder` is missing.
 * @throws {Error} If the upload request fails.
 *
 * @returns {Promise<Object>} Cloudinary's JSON response on success.
 *   - `secure_url` {string}: The hosted URL of the uploaded file.
 *   - `public_id` {string}: Cloudinary's ID for the file.
 *   - `resource_type` {string}: Type of the file (`image`, `video`, etc.).
 *   - `eager` {Array} (optional): Transformed versions, if eager transformations were used.
 */
export default async function cloudinaryUpload({ file, folder }) {
  if (!file || !folder) throw new Error("File and folder are required");

  const { info } = await fetchInstance(`/upload/signature?folder=${folder}`);
  const { apiKey, timestamp, signature, folder: folderName } = info;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", apiKey);
  formData.append("timestamp", timestamp);
  formData.append("signature", signature);
  formData.append("folder", folderName);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${info.cloudName}/auto/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  return await res.json();
}
