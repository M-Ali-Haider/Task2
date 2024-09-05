"use client";
import Link from "next/link";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathName = usePathname();
  const splitList = pathName.split("/").filter((segment) => segment);
  return (
    <>
      <div className={styles.center}>
        {splitList.map((item, index) => {
          const href = `/${splitList.slice(0, index + 1).join("/")}`;
          return (
            <span key={index} className="capitalize">
              {index < splitList.length - 1 ? (
                <>
                  <span
                    className={styles.dropShadow}
                    style={{ zIndex: 100 - index * 10 }}
                  >
                    <Link
                      className={`${styles.clipPath}`}
                      href={href}
                      style={{ paddingLeft: index === 0 ? 55 : 75 }}
                    >
                      {item}
                    </Link>
                  </span>
                </>
              ) : (
                <>
                  <span className={styles.clipPath}>{item}</span>
                </>
              )}
            </span>
          );
        })}
      </div>
    </>
  );
}
