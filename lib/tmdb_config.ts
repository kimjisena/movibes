export type Config = {
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
};
  
let CONFIG_CACHE: Config | null = null;

export default async function get_tmdb_config () {
    // return the cached configuration
    if (CONFIG_CACHE) {
        return CONFIG_CACHE;
    }

    // or, fetch them and cache
    const response = await fetch('/api/config');
    const config = await response.json();
    CONFIG_CACHE = config;

    return CONFIG_CACHE;
}