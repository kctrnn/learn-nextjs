import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method not supported' });
  }

  const cookies = new Cookies(req, res);
  cookies.set('access-token');

  res.status(200).json({ message: 'Logout successfully' });
}
