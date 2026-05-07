import man from "../assets/man.png"
import woman from "../assets/woman.png"
import "./ProfileCard.css"

const genders = ["male", "female"]

const getGender = (id) => {
    const chosenGender = id % 2 === 0? genders[0] : genders[1]
    return chosenGender
}

const ProfileCard = ({ user }) => {
    const userGender = getGender(user.id)
    const profilePicture = userGender == "male" ? man : woman

    return (
        <article className="profile-card">
            <div className="profile-header">
                <img src={profilePicture} alt={user.username} className="profile-avatar" />
                <div className="profile-name">
                    <h2>{user.name}</h2>
                    <p className="username">@{user.username}</p>
                </div>
            </div>

            <section className="contact-section">
                <h3>Contact</h3>
                <div className="contact-grid">
                    <div className="contact-item">
                        <span className="label">Email</span>
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                    </div>
                    <div className="contact-item">
                        <span className="label">Phone</span>
                        <a href={`tel:${user.phone}`}>{user.phone}</a>
                    </div>
                    <div className="contact-item">
                        <span className="label">Website</span>
                        <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
                    </div>
                </div>
            </section>

            <section className="address-section">
                <h3>Address</h3>
                <address>
                    <p>{user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p>{user.address.city}, {user.address.zipcode}</p>
                </address>
            </section>
        </article>
    )
}

export default ProfileCard