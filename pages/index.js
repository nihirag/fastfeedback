import Head from "next/head";
import { useAuth } from "../lib/auth";
import styles from "../styles/Home.module.css";

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>FastFeedback</h1>
        {auth.user ? (
          <div>
            <p>Email: {auth.user.email}</p>
            <button onClick={(e) => auth.signout()}>Sign Out</button>
          </div>
        ) : (
          <div>
            <button onClick={(e) => auth.signinWithGitHub()}>
              Sign In Github
            </button>
            <button onClick={(e) => auth.signinWithGoogle()}>
              Sign In Google
            </button>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
