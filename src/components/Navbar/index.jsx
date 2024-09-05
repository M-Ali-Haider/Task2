import { paths } from "@/utils/paths";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="fixed right-4 top-4">
        {paths.map((item, index) => {
          return (
            <div key={index}>
              <Link href={item.path}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
