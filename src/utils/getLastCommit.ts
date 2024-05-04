interface Commit {
  html_url: string;
  sha: string;
}

export const getLastCommit = async (username: string, repo: string) => {
  const url = `https://api.github.com/repos/${username}/${repo}/commits/master`;

  const response = await fetch(url);
  const commit = response.json();
  return commit as Promise<Commit>;
};
