import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="Home">
      <h1>Recipe Web App</h1>
      <Link href={"/recipe-list"}>RecipeList</Link>
    </div>
  );
}
