
import { Card } from "../../components/card/card"; 
import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";
import prisma from "../../lib/prisma";
import "./globals.css";


export default async function HomePage() {
  let cardList = [];
  
  try {
    cardList = await prisma.card.findMany(); 
  } catch (error) {
    console.error("Ошибка загрузки данных из базы данных:", error);
  }
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Image src="/img/logo.svg" alt="Логотип" width={65} height={20} />
          </div>
          <div className={styles.textContainer}>
            <Link href="/catalog" className="navLink">Каталог</Link>
            <Link href="/gallery" className="navLink">Галерея</Link>
            <Link href="/labs" className="navLink">О лаборатории</Link>
            <Link href="/contacts" className="navLink">Контакты</Link>
          </div>
          <div className={styles.icon}>
          <Link href="/search">
              <Image src="/img/search.svg" alt="поиск" width={24} height={24} />
           </Link>
          <Link href="/login">
              <Image src="/img/log-in.svg" alt="вход" width={24} height={24} />
          </Link>
          </div>
        </div>
      </header>
       {/* Content Block */}
 <div className={styles.contentBlock}>
        <div className={styles.textContent}>
          <h1>Крупнейшая коллекция <br /> природных артефактов</h1>
          <p>
            Являясь всего лишь частью общей картины, интерактивные прототипы,
            которые представляют собой яркий пример европейского типа политической и социальной культуры.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/more-info">
            <button className={styles.button}>Исследовать</button>
          </Link>
        </div>
      </div>

      <div className={styles.cardContainer}> 
      {cardList.length > 0 ? (
          cardList.map((item) => (
            <Link key={item.id} href={`/catalog/${item.id}`} className={styles.blockItem}>
              <Card
                name={item.name}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            </Link>
          ))
        ) : (
          <p>Данные не найдены. Проверьте подключение к базе данных.</p>
        )}
      </div>

      <h2 className={styles.infoBlockTitle}>Новые артефакты</h2>
      <div className={styles.infoBlock}>
        <div className={styles.infoImage}>
          <Image
            src="/img/card_5.svg"
            alt="изображение"
            width={825}
            height={493}
            className={styles.sideImage}
          />
        </div>
        <div className={styles.textContent2}>
          <h3>Kurische Nehrung 24</h3>
          <p>
          Вот вам яркий пример современных тенденций - начало повседневной работы по формированию позиции выявляет срочную потребность методов управления процессами. 
          <br></br><br></br>Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.
          </p>
          <div className={styles.buttonContainer2}>
            <Link href="/more-info">
              <button className={styles.button2}>Читать далее</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Block */}
      <div className={styles.backgroundBlock}>
        <h2 className={styles.backgroundTitle}>Помочь проекту</h2>
        <p>
          Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора,
          кроме определения прогресса профессионального сообщества.
        </p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Имя" required className={styles.inputField} />
          <input type="email" placeholder="Email" required className={styles.inputField} />
          <button type="submit" className={styles.submitButton}>Отправить</button>
        </form>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
        <Link href="/icon1">
                <Image src="/img/icon1.svg" alt="Иконка 1" width={24} height={24} />
            </Link>
            <Link href="icon2">
                <Image src="/img/icon2.svg" alt="Иконка 2" width={24} height={24} />
            </Link>
            <Link href="/icon3">
                <Image src="/img/icon3.svg" alt="Иконка 3" width={24} height={24} />
            </Link>
            <Link href="/icon4">
                <Image src="/img/icon4.svg" alt="Иконка 4" width={24} height={24} />
            </Link>
        </div>
      </footer>
    </>
  );
}

