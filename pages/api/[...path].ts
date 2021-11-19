import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    // covert cookies to header Authorization
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access-token');

    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    // don't send cookies to API server
    req.headers.cookie = '';

    // /api/meetups
    // https://json-server-kctrnn.herokuapp.com/api/meetups

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });

  //   res.status(200).json({ message: 'Catch all paths' });
}
