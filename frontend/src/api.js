const API = "https://careerpilot-ai-backend-aktd.onrender.com";

export async function apiRequest(url, options = {}) {
  const token = localStorage.getItem("token");

  return fetch(API + url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {}),
    },
  });
}