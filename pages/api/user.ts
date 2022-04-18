import { NextApiRequest, NextApiResponse } from 'next';
import { user } from '../../utils/user';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(user);
}
