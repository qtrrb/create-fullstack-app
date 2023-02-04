import qs from "querystring";
import axios from "axios";
import "dotenv/config";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = "http://127.0.0.1:8080/auth/callback/";
const authEndpoint = "https://github.com/login/oauth/authorize";
const tokenEndpoint = "https://github.com/login/oauth/access_token";

export function generateAuthUrl(scope: string, state: string): string {
  const query = qs.stringify({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: scope,
    state: state,
    response_type: "code",
  });
  return `${authEndpoint}?${query}`;
}

export async function getToken(code: string): Promise<string> {
  const data = {
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };
  const headers = {
    Accept: "application/json",
  };
  const response = await axios.post(tokenEndpoint, data, {
    headers,
    withCredentials: true,
  });
  const accessToken = response.data.access_token;
  return accessToken;
}
