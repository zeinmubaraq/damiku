import { NextApiRequest, NextApiResponse } from 'next';
import { post } from '../../utils/post';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(post);
}
