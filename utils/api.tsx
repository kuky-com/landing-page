const BASE_URL = "https://api.kuky.com/api/";

type RequestParams = Record<string, string | number | boolean | undefined>;

export const get = async <T = any>(
  endpoint: string,
  params: RequestParams = {}
): Promise<T> => {
  const query = new URLSearchParams(params as Record<string, string>).toString();
  const url = `${BASE_URL}${endpoint}${query ? `?${query}` : ""}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "GET request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

export const post = async <T = any, B = any>(
  endpoint: string,
  data: B
): Promise<T> => {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "POST request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};
