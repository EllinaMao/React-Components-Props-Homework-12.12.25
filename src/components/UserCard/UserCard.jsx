/**Создайте небольшой React-проект, в котором отображается профиль пользователя с картинкой, стилями и разными компонентами. Главный компонент App Отвечает за отображение всех остальных компонентов.
Компонент UserCard, отображает:
1) имя пользователя (через props) 
2) город (через props) 
3) аватарку (через props, картинка из папки src/assets или public) 
4) использует CSS-файл */

import styles from "./UserCard.module.css";
import React from "react";

class UserCard extends React.Component {
  
  render() {
    const { name, city, avatar } = this.props;

    
    const displayName = name || "Unknown";
    const displayCity = city || "Unknown";
    
    const placeholderAvatar = `https://placehold.co/600x400/64b9ff/FFF@2x.png?text=${displayName[0]}&font=poppins`;
    const displayAvatar = avatar || placeholderAvatar;
    
    return (
      <div className={styles.userCard}>
        <img
          src={displayAvatar}
          alt={`${displayName}'s avatar`}
          className={styles.avatar}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderAvatar;
          }}
        />
        <div className={styles.userInfo}>
          <h3>{displayName}</h3>
          <p className={styles.city}>From: {displayCity}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
