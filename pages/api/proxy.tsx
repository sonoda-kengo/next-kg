import { NextApiHandler } from 'next';
import fetch from 'node-fetch';

const proxy: NextApiHandler = async (req, res) => {
  const { url } = req.query;

  try {
    const response = await fetch(url as string);
    const data = await response.text();

    res.setHeader('Content-Type', response.headers.get('Content-Type') || '');
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export default proxy;
