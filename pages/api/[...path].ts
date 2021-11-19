import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // don't send cookies to API server
  req.headers.cookie = '';

  // /api/meetups
  // https://json-server-kctrnn.herokuapp.com/api/meetups

  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });

  //   res.status(200).json({ message: 'Catch all paths' });
}
