import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    return res.status(404).json({ message: 'Method not supported' });
  }

  res.status(200).json({ message: 'Hello from product list' });
}
