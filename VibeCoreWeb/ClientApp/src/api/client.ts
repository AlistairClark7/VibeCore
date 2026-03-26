export const customFetch = async <T>({
  url,
  method,
  params,
  data,
  headers,
  signal,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: Record<string, string>;
  data?: unknown;
  headers?: HeadersInit;
  signal?: AbortSignal;
}): Promise<T> => {
  const searchParams = params
    ? `?${new URLSearchParams(params).toString()}`
    : "";

  const response = await fetch(`${url}${searchParams}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...(data ? { body: JSON.stringify(data) } : {}),
    signal,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
};

export default customFetch;
