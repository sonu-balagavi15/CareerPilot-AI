const API = "https://careerpilot-ai-backend-aktd.onrender.com";

export async function apiRequest(url, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(options.headers || {}),
  };

  // Only add Content-Type for JSON requests
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  return fetch(API + url, {
    ...options,
    headers,
  });
}