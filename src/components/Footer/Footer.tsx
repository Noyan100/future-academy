import React from 'react';
import logo from '../../assets/footer-logo.svg';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.blockOne}>
        <li className={styles.logo}>
          <img src={logo} alt="Future academy logo" />
        </li>
        <li className={styles.number}>8 800 950-33-98</li>
        <li>г. Москва, ул. Ленина, д. 50</li>
        <li>info@hodfutureacademy.ru</li>
        <li className={styles.socials}>
          <ul>
            <li>
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.1602 1.39844C19.0898 1.75 18.8086 2.32422 18.3164 3.12109C17.8477 3.91797 17.4141 4.62109 17.0156 5.23047C16.6172 5.81641 16.4062 6.12109 16.3828 6.14453C16.2422 6.35547 16.1719 6.50781 16.1719 6.60156C16.1719 6.69531 16.2422 6.85938 16.3828 7.09375C16.3828 7.09375 16.4531 7.17578 16.5938 7.33984C16.7578 7.50391 16.9453 7.69141 17.1562 7.90234C17.3672 8.11328 17.6016 8.35938 17.8594 8.64062C18.1172 8.92188 18.3516 9.20312 18.5625 9.48438C18.7969 9.74219 18.9961 10.0117 19.1602 10.293C19.3477 10.5742 19.4766 10.8086 19.5469 10.9961C19.7109 11.582 19.4766 11.875 18.8438 11.875H16.7695C16.6055 11.875 16.4648 11.8516 16.3477 11.8047C16.2305 11.7578 16.1016 11.6758 15.9609 11.5586C15.8203 11.4414 15.6914 11.3125 15.5742 11.1719C15.457 11.0312 15.2812 10.832 15.0469 10.5742C14.8125 10.3164 14.5781 10.0703 14.3438 9.83594C13.4062 8.94531 12.7148 8.5 12.2695 8.5C11.9883 8.5 11.8242 8.58203 11.7773 8.74609C11.7305 8.91016 11.707 9.37891 11.707 10.1523C11.7305 10.5273 11.7422 10.832 11.7422 11.0664C11.7422 11.3477 11.6484 11.5586 11.4609 11.6992C11.2734 11.8164 10.8633 11.875 10.2305 11.875C9.12891 11.875 8.01562 11.5469 6.89062 10.8906C5.76562 10.2344 4.78125 9.29688 3.9375 8.07812C3.14062 7 2.47266 5.93359 1.93359 4.87891C1.41797 3.80078 1.07812 2.98047 0.914062 2.41797C0.75 1.85547 0.667969 1.45703 0.667969 1.22266C0.667969 0.824219 0.902344 0.625 1.37109 0.625H3.44531C3.70312 0.625 3.89062 0.683594 4.00781 0.800781C4.14844 0.917969 4.26562 1.12891 4.35938 1.43359C4.85156 2.86328 5.44922 4.14062 6.15234 5.26562C6.87891 6.39062 7.42969 6.95312 7.80469 6.95312C7.94531 6.95312 8.03906 6.90625 8.08594 6.8125C8.15625 6.69531 8.19141 6.48438 8.19141 6.17969V3.12109C8.16797 2.79297 8.10938 2.51172 8.01562 2.27734C7.92188 2.04297 7.82812 1.87891 7.73438 1.78516C7.64062 1.66797 7.54688 1.55078 7.45312 1.43359C7.38281 1.31641 7.34766 1.21094 7.34766 1.11719C7.34766 1.02344 7.37109 0.941406 7.41797 0.871094C7.46484 0.800781 7.52344 0.742188 7.59375 0.695312C7.6875 0.648438 7.78125 0.625 7.875 0.625H11.1445C11.5195 0.625 11.707 0.882812 11.707 1.39844V5.47656C11.707 5.875 11.8125 6.07422 12.0234 6.07422C12.2578 6.07422 12.5859 5.86328 13.0078 5.44141C13.4531 4.94922 13.8867 4.35156 14.3086 3.64844C14.7305 2.94531 15.0469 2.35938 15.2578 1.89062L15.5742 1.22266C15.7383 0.824219 16.0312 0.625 16.4531 0.625H18.5273C19.0898 0.625 19.3008 0.882812 19.1602 1.39844Z"
                  fill="#fff"
                />
              </svg>
            </li>
            <li>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.02734 5.40234C5.82422 4.60547 6.78516 4.20703 7.91016 4.20703C9.03516 4.20703 9.98438 4.60547 10.7578 5.40234C11.5547 6.17578 11.9531 7.125 11.9531 8.25C11.9531 9.375 11.5547 10.3359 10.7578 11.1328C9.98438 11.9062 9.03516 12.293 7.91016 12.293C6.78516 12.293 5.82422 11.9062 5.02734 11.1328C4.25391 10.3359 3.86719 9.375 3.86719 8.25C3.86719 7.125 4.25391 6.17578 5.02734 5.40234ZM6.04688 10.1133C6.5625 10.6289 7.18359 10.8867 7.91016 10.8867C8.63672 10.8867 9.25781 10.6289 9.77344 10.1133C10.2891 9.59766 10.5469 8.97656 10.5469 8.25C10.5469 7.52344 10.2891 6.90234 9.77344 6.38672C9.25781 5.87109 8.63672 5.61328 7.91016 5.61328C7.18359 5.61328 6.5625 5.87109 6.04688 6.38672C5.53125 6.90234 5.27344 7.52344 5.27344 8.25C5.27344 8.97656 5.53125 9.59766 6.04688 10.1133ZM12.7617 3.39844C12.9492 3.5625 13.043 3.77344 13.043 4.03125C13.043 4.28906 12.9492 4.51172 12.7617 4.69922C12.5977 4.88672 12.3867 4.98047 12.1289 4.98047C11.8711 4.98047 11.6484 4.88672 11.4609 4.69922C11.2734 4.51172 11.1797 4.28906 11.1797 4.03125C11.1797 3.77344 11.2734 3.5625 11.4609 3.39844C11.6484 3.21094 11.8711 3.11719 12.1289 3.11719C12.3867 3.11719 12.5977 3.21094 12.7617 3.39844ZM15.75 5.01562C15.7734 5.64844 15.7852 6.72656 15.7852 8.25C15.7852 9.77344 15.7734 10.8516 15.75 11.4844C15.6797 12.9141 15.2461 14.0273 14.4492 14.8242C13.6758 15.5977 12.5742 16.0078 11.1445 16.0547C10.5117 16.1016 9.43359 16.125 7.91016 16.125C6.38672 16.125 5.30859 16.1016 4.67578 16.0547C3.24609 15.9844 2.14453 15.5625 1.37109 14.7891C1.06641 14.5078 0.820312 14.1797 0.632812 13.8047C0.445312 13.4297 0.304688 13.0664 0.210938 12.7148C0.140625 12.3633 0.105469 11.9531 0.105469 11.4844C0.0585938 10.8516 0.0351562 9.77344 0.0351562 8.25C0.0351562 6.72656 0.0585938 5.63672 0.105469 4.98047C0.175781 3.57422 0.597656 2.48438 1.37109 1.71094C2.14453 0.914062 3.24609 0.480469 4.67578 0.410156C5.30859 0.386719 6.38672 0.375 7.91016 0.375C9.43359 0.375 10.5117 0.386719 11.1445 0.410156C12.5742 0.480469 13.6758 0.914062 14.4492 1.71094C15.2461 2.48438 15.6797 3.58594 15.75 5.01562ZM14.0625 12.8906C14.1328 12.7031 14.1914 12.4688 14.2383 12.1875C14.2852 11.8828 14.3203 11.5312 14.3438 11.1328C14.3672 10.7109 14.3789 10.3711 14.3789 10.1133C14.3789 9.85547 14.3789 9.49219 14.3789 9.02344C14.3789 8.55469 14.3789 8.29688 14.3789 8.25C14.3789 8.17969 14.3789 7.92188 14.3789 7.47656C14.3789 7.00781 14.3789 6.64453 14.3789 6.38672C14.3789 6.12891 14.3672 5.80078 14.3438 5.40234C14.3203 4.98047 14.2852 4.62891 14.2383 4.34766C14.1914 4.04297 14.1328 3.79688 14.0625 3.60938C13.7812 2.88281 13.2773 2.37891 12.5508 2.09766C12.3633 2.02734 12.1172 1.96875 11.8125 1.92188C11.5312 1.875 11.1797 1.83984 10.7578 1.81641C10.3594 1.79297 10.0312 1.78125 9.77344 1.78125C9.53906 1.78125 9.17578 1.78125 8.68359 1.78125C8.21484 1.78125 7.95703 1.78125 7.91016 1.78125C7.86328 1.78125 7.60547 1.78125 7.13672 1.78125C6.66797 1.78125 6.30469 1.78125 6.04688 1.78125C5.78906 1.78125 5.44922 1.79297 5.02734 1.81641C4.62891 1.83984 4.27734 1.875 3.97266 1.92188C3.69141 1.96875 3.45703 2.02734 3.26953 2.09766C2.54297 2.37891 2.03906 2.88281 1.75781 3.60938C1.6875 3.79688 1.62891 4.04297 1.58203 4.34766C1.53516 4.62891 1.5 4.98047 1.47656 5.40234C1.45312 5.80078 1.44141 6.12891 1.44141 6.38672C1.44141 6.62109 1.44141 6.98438 1.44141 7.47656C1.44141 7.94531 1.44141 8.20312 1.44141 8.25C1.44141 8.34375 1.44141 8.56641 1.44141 8.91797C1.44141 9.24609 1.44141 9.52734 1.44141 9.76172C1.44141 9.97266 1.44141 10.2539 1.44141 10.6055C1.46484 10.957 1.48828 11.2617 1.51172 11.5195C1.53516 11.7539 1.57031 12 1.61719 12.2578C1.66406 12.5156 1.71094 12.7266 1.75781 12.8906C2.0625 13.6172 2.56641 14.1211 3.26953 14.4023C3.45703 14.4727 3.69141 14.5312 3.97266 14.5781C4.27734 14.625 4.62891 14.6602 5.02734 14.6836C5.44922 14.707 5.77734 14.7188 6.01172 14.7188C6.26953 14.7188 6.63281 14.7188 7.10156 14.7188C7.59375 14.7188 7.86328 14.7188 7.91016 14.7188C7.98047 14.7188 8.23828 14.7188 8.68359 14.7188C9.15234 14.7188 9.51562 14.7188 9.77344 14.7188C10.0312 14.7188 10.3594 14.707 10.7578 14.6836C11.1797 14.6602 11.5312 14.625 11.8125 14.5781C12.1172 14.5312 12.3633 14.4727 12.5508 14.4023C13.2773 14.0977 13.7812 13.5938 14.0625 12.8906Z"
                  fill="#fff"
                />
              </svg>
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.7188 9.25C17.7188 11.4062 17.0156 13.3047 15.6094 14.9453C14.2031 16.5625 12.457 17.5352 10.3711 17.8633V11.7812H12.4102L12.7969 9.25H10.3711V7.59766C10.3711 6.70703 10.8398 6.26172 11.7773 6.26172H12.8672V4.11719C12.2109 4 11.5664 3.94141 10.9336 3.94141C10.2539 3.94141 9.66797 4.07031 9.17578 4.32812C8.70703 4.58594 8.33203 4.97266 8.05078 5.48828C7.76953 6.00391 7.62891 6.61328 7.62891 7.31641V9.25H5.41406V11.7812H7.62891V17.8633C5.54297 17.5352 3.79688 16.5625 2.39062 14.9453C0.984375 13.3047 0.28125 11.4062 0.28125 9.25C0.28125 6.83594 1.125 4.78516 2.8125 3.09766C4.52344 1.38672 6.58594 0.53125 9 0.53125C11.4141 0.53125 13.4648 1.38672 15.1523 3.09766C16.8633 4.78516 17.7188 6.83594 17.7188 9.25Z"
                  fill="#fff"
                />
              </svg>
            </li>
            <li>
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.3359 2.60938C19.4062 2.89062 19.4648 3.24219 19.5117 3.66406C19.582 4.08594 19.6289 4.50781 19.6523 4.92969C19.6758 5.32812 19.6875 5.70312 19.6875 6.05469C19.7109 6.40625 19.7227 6.69922 19.7227 6.93359V7.25C19.7227 9.35938 19.5938 10.918 19.3359 11.9258C19.2188 12.3242 19.0078 12.6758 18.7031 12.9805C18.3984 13.2852 18.0352 13.4961 17.6133 13.6133C17.168 13.7305 16.3242 13.8242 15.082 13.8945C13.8398 13.9414 12.7031 13.9766 11.6719 14H10.125C6.11719 14 3.62109 13.8711 2.63672 13.6133C1.72266 13.3555 1.14844 12.793 0.914062 11.9258C0.796875 11.4805 0.703125 10.8711 0.632812 10.0977C0.585938 9.30078 0.550781 8.63281 0.527344 8.09375V7.25C0.527344 5.16406 0.65625 3.61719 0.914062 2.60938C1.03125 2.1875 1.24219 1.82422 1.54688 1.51953C1.85156 1.21484 2.21484 1.00391 2.63672 0.886719C3.08203 0.769531 3.92578 0.6875 5.16797 0.640625C6.41016 0.570312 7.54688 0.523438 8.57812 0.5H10.125C14.1328 0.5 16.6289 0.628906 17.6133 0.886719C18.0352 1.00391 18.3984 1.21484 18.7031 1.51953C19.0078 1.82422 19.2188 2.1875 19.3359 2.60938ZM8.15625 10.1328L13.1836 7.25L8.15625 4.40234V10.1328Z"
                  fill="#fff"
                />
              </svg>
            </li>
            <li>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.75 1.7305L13.3594 12.9102C13.1719 13.7071 12.7383 13.918 12.0586 13.543L8.4375 10.8711L6.67969 12.5586C6.44531 12.793 6.19922 12.9102 5.94141 12.9102L6.22266 9.21879L12.9375 3.17191C13.1016 3.00785 13.1016 2.9141 12.9375 2.89066C12.7969 2.84378 12.6445 2.87894 12.4805 2.99613L4.18359 8.23441L0.597656 7.10941C0.199219 6.99222 0.0117188 6.81644 0.0351562 6.58207C0.0585938 6.34769 0.304688 6.14847 0.773438 5.98441L14.7305 0.570347C15.082 0.45316 15.3633 0.500035 15.5742 0.710972C15.7852 0.898472 15.8438 1.23832 15.75 1.7305Z"
                  fill="#fff"
                />
              </svg>
            </li>
          </ul>
        </li>
        <li className={styles.copyright}>ХОД, Future Academy</li>
      </ul>
      <ul className={styles.blockTwo}>
        <span>Детям</span>
        <li>Робототехника</li>
        <li>Создание игр</li>
        <li>Программирование</li>
        <li>Мультимедиа</li>
        <li>Soft skills</li>
        <li>Шахматы</li>
        <li>Блогинг</li>
        <li>Создание игр</li>
        <li>Программирование</li>
        <li>Мультимедиа</li>
        <li>Soft skills</li>
      </ul>
      <ul className={styles.blockThree}>
        <span>Подросткам</span>
        <li>Web-разработка</li>
        <li>Прикладное программирование</li>
        <li>Графическое моделирование</li>
        <li>Game Development</li>
        <li>Soft skills</li>
        <li>Разработчик мобильных приложений</li>
        <li>Блогинг</li>
        <li>Создание игр</li>
        <li>Программирование</li>
        <li>Мультимедиа</li>
        <li>Soft skills</li>
      </ul>
      <ul className={styles.blockFour}>
        <span>Взрослым</span>
        <li>Разработчик игр на Unity</li>
        <li>Разработка ПО</li>
        <li>Графический Дизайн</li>
        <li>Тестировщик ПО</li>
        <li>Интернет Маркетинг</li>
        <li>Java-разработчик</li>
        <li>Python–разработчик</li>
        <li>IOS-разработчик</li>
        <li>Программирование</li>
      </ul>
      <ul className={styles.blockFive}>
        <span>Информация</span>
        <li>Об академии</li>
        <li>Мероприятия</li>
        <li>Новости</li>
        <li>База знаний</li>
        <li>Карьера</li>
        <li>Контакты</li>
      </ul>
    </footer>
  );
};

export default Footer;
