/**
 * Custom fetch wrapper.
 *
 * @param {string} url - API endpoint
 * @param {FetchInstanceOptions} [options={}] - Fetch options
 * @returns {Promise<any>} - Parsed JSON data
 */
export default async function fetchInstance(url, options = {}) {
  if (!url) throw new Error("URL is required");
  if (typeof url !== "string") throw new Error("URL must be a string");

  const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const res = await fetch(`${backendUrl}${url}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();
  return data;
}
