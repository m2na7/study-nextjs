import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="접시 위에 담긴 음식"/>
        푸디
      </Link>
      <nav>
          <ul>
              <li>
                  <Link href="/meals">검색</Link>
              </li>
              <li>
                  <Link href="/community">커뮤니티</Link>
              </li>
          </ul>
      </nav>
    </header>
  );
}
