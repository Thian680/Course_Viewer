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