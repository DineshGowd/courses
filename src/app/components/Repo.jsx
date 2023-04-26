import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/DineshGowd/${name}`
  );
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  console.log(repo);
  return (
    <div className="card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <div className="repo-details">
        <span>
          <FaStar />
          {repo.stargazers_count}
        </span>
        <span>
          <FaCodeBranch />
          {repo.forks_count}
        </span>
        <span>
          <FaEye />
          {repo.watchers_count}
        </span>
      </div>
    </div>
  );
};

export default Repo;
