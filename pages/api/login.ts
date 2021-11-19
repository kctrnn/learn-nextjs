import httpProxy, { ProxyResCallback } from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method not supported' });
  }

  return new Promise((resolve) => {
    // don't send cookies to API server
    req.headers.cookie = '';

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = '';

      proxyRes.on('data', function (chunk) {
        body += chunk;
      });

      proxyRes.on('end', function () {
        const { accessToken, expiredAt } = JSON.parse(body);

        // convert token to cookies
        const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
        cookies.set('access-token', accessToken, {
          httpOnly: true,
          sameSite: 'lax',
          expires: new Date(expiredAt),
        });

        res.end('Login successfully');

        resolve(true);
      });
    };

    proxy.once('proxyRes', handleLoginResponse);
  });
}
