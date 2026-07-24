import { useState, useEffect } from 'react';

const USERNAME = 'kaku-coder';

export default function useGitHub() {
  const [data, setData] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    contributions: 0,
    recentRepos: [],
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        const user = await userRes.json();
        const repos = await reposRes.json();

        if (cancelled) return;

        const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

        const recentRepos = repos.slice(0, 5).map((r) => ({
          name: r.name,
          description: r.description || 'No description',
          language: r.language,
          stars: r.stargazers_count || 0,
          url: r.html_url,
          updatedAt: r.updated_at,
        }));

        setData({
          repos: user.public_repos || 0,
          followers: user.followers || 0,
          stars: totalStars,
          contributions: 0,
          recentRepos,
          loading: false,
        });
      } catch {
        if (!cancelled) {
          setData((prev) => ({ ...prev, loading: false }));
        }
      }
    }

    fetchGitHub();
    return () => { cancelled = true; };
  }, []);

  return data;
}
