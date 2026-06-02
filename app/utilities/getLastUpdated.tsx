export default async function getLastUpdated() {
  const response = await fetch(
    "https://api.github.com/repos/USERNAME/REPO/commits?per_page=1",
    {
      next: { revalidate: 3600 }, // cache for 1 hour
    }
  );

  const commits = await response.json();

  const date = new Date(commits[0].commit.author.date);

  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}
