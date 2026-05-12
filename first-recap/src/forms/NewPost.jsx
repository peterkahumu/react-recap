import { useState } from 'react';
import styles from './forms.module.css';

const NewPostForm = ({ createPost, toggleModal }) => {
    const [error, setError] = useState("");

    const handleAddPost = (e) => {
        e.preventDefault();

        const form = e.currentTarget
        const formData = new FormData(form);
        const title = String(formData.get("title") ?? "");
        const body = String(formData.get("body") ?? "")

        if (!title) {
            setError("Title required");
            return;
        };
        if (!body) {
            setError("Body content required");
            return;
        };
    
        setError("");  
        createPost({title, body});
        toggleModal();
        form.reset();
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleAddPost}>
                <div className={styles.formGroup}>
                    <label className={styles.label}> Title </label>
                    <input className={styles.input} type="text" placeholder="Sample Title" name="title" id="title" />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Post content</label>
                    <textarea className={styles.textarea} name="body" id="body" placeholder='Add body content here'  rows={3} />
                </div>

                <input type="submit" value="Create post" className={`${styles.button} ${styles.submitButton}`} />
                <span className={styles.errorMessage}>{error}</span>
            </form>
            <button type="button" className={`${styles.button} ${styles.closeButton}`} onClick={toggleModal}>Close</button>
        </>
        
    )
}

export default NewPostForm;