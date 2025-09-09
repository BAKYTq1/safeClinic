import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminAuth } from "../../app/api/adminAuth/adminAuth";
import styles from "./AdminRegistration.module.scss";
import { MdHealthAndSafety } from "react-icons/md";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await adminAuth(email, password);
      // alert("Админ логини ийгиликтүү ");

      navigate("/admin");
    } catch (err: any) {
      alert(err.message || "Ката кетти ❌");
    }
  }

  return (
    <div className={styles.loginContainer}>
        <div className={styles.sci}>
          <MdHealthAndSafety className={styles.icon} />
          <h2 className={styles.title}>safe.clinic</h2>
        </div>
        <h4 className={styles.subtitle}>Вход на веб приложение</h4>
        <p className={styles.text}>Все условия для вашей безопасности</p>
      <div className={styles.div}>

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleLogin}>
          Админ
        </button>
      </div>
    </div>
  );
}
