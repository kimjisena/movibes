// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=de925752aa6bd33c06cb480db614f6ba');
  const data = await response.json();
  return res.status(200).json(data);
}
