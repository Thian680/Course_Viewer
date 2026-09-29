import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.homePage}>
            <h1>Welcome to Ian Bryle's Course Viewer App!</h1>
            <p>Click on "Courses" to see the lists of available courses.</p>
        </div>
    );
}

export default HomePage;