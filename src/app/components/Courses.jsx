import Link from "next/link";
async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}
const Courses = ({ courses }) => {
  // const courses = await fetchCourses();

  return (
    <>
      <div className="courses">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <h2>{course.name}</h2>
            <small>Level:{course.fork_count}</small>
            <p>{course.description}</p>
            <Link className="btn" href={course.git_url} target="_blank">
              Go To Course
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
