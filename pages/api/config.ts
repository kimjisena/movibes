// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type Config = {
  images?: {
    base_url?: string,
    secure_base_url?: string,
    backdrop_sizes?: string[],
    logo_sizes?: string[],
    poster_sizes?: string[],
    profile_sizes?: string[],
    still_sizes?: string[],
  },
  change_keys?: string[],
}

const CONFIG_CACHE: Config = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY}`);
  const data = await response.json();
  return res.status(200).json(data);
}
