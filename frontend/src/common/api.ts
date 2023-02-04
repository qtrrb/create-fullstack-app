const baseUrl = "http://127.0.0.1:8080";

export async function get<T>(path: string): Promise<T> {
  return await fetch(baseUrl + path, {
    method: "GET",
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function post<T>(path: string, data: object): Promise<T> {
  return await fetch(baseUrl + path, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
