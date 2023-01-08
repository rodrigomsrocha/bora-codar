import { ReactNode } from "react";
import styles from "./index.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <main className={styles.container}>{children}</main>;
}
