"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <CourseSearch getSearchResults={(result) => setCourses(result)} />
        <Courses courses={courses} />
      </div>
    </>
  );
};

export default HomePage;
