import CourseList from "../components/CourseList";
import CourseDetails from "../components/CourseDetails";
import styles from "./CoursesPage.module.css";

function CoursesPage({ selectedCourse, setSelectedCourse }) {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      description: "Learn the basics of React",
    },
    {
      id: 2,
      title: "React Router",
      description: "Master client-side navigation",
    },
    {
      id: 3,
      title: "State Lifting",
      description: "Manage shared state in React",
    },
    {
      id: 4,
      title: "WebDev 1",
      description:
        "Introduction to client-side coding, webpage structure, and basic interactivity.",
    },
    {
      id: 5,
      title: "WebDev 2",
      description:
        "Advanced front-end programming, asynchronous data handling, and server-side integration.",
    },
  ];

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className={styles.coursesPage}>
      <div className={styles.courseListContainer}>
        <CourseList courses={courses} onSelectCourse={handleSelectCourse} />
      </div>
      <div className={styles.courseDetailsContainer}>
        <CourseDetails course={selectedCourse} />
      </div>
    </div>
  );
}

export default CoursesPage;