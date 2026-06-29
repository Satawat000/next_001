import Image from "next/image";
import styles from "./ui/home.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Hello world!</h1>
    </main>
    // <main className="flex min-h-screen flex-col p-6">
    //   <div className={styles.shape} />
    // </main>
  );
}
