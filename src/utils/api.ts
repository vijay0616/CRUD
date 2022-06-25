export enum ApiMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}

export async function callApi(
  method: string,
  url: string,
  data?: any
): Promise<any> {
  const fullApiUrl = `${
    process.env.REACT_APP_API_BASE_URL ?? "http://localhost:3001"
  }${url}`;
  const res = await fetch(fullApiUrl, {
    method,
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status !== 200) {
    const badResponse = await res.json();
    return { error: badResponse };
  }
  return res.json();
}

export async function uploadApi(
  method: string,
  url: string,
  data?: any
): Promise<any> {
  const fullApiUrl = `${
    process.env.REACT_APP_API_BASE_URL ?? "http://localhost:3001"
  }${url}`;
  const response = await fetch(fullApiUrl, {
    method,
    mode: "cors",
    body: data,
  });
  if (response.status !== 200) {
    const badResponse = await response.json();
    return { result: badResponse };
  } else {
    const importResponse = await response.json();
    return { result: importResponse };
  }
}
