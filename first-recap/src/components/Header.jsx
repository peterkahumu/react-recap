import { MdPostAdd, MdMessage } from "react-icons/md";
import styles from "./Header.module.css";

const Header = ({ toggleModal }) => {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <MdMessage className={styles.logoIcon} aria-hidden="true" />
                    <div>
                        <h1 className={styles.brandTitle}>Trending Posts</h1>
                        <p className={styles.brandSubtitle}>Create and browse community posts</p>
                    </div>
                </div>

                <button
                    type="button"
                    className={styles.createButton}
                    onClick={toggleModal}
                    aria-label="Create a new post"
                >
                    <MdPostAdd aria-hidden="true" />
                    <span>New Post</span>
                </button>
            </div>
        </header>
    )
}

export default Header;