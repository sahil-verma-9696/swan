/**
 * Handle single network call
 * @param {string} url
 * @param {FetchInstanceOptions} [options={}] - Fetch options
 * @returns
 */

import fetchInstance from "../utility/fetchInstance";

export default async function useNetworkCall(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isFetching = false;

  const fetchedData = await fetchInstance(url, options);
}
