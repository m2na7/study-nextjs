import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          맛있는 음식을 <span className={classes.highlight}>직접 </span>
          만들어보세요
        </h1>
        <p>좋아하는 레시피를 골라서 직접 요리해 보세요. 매우 간단합니다 !</p>
        <p className={classes.cta}>
          <Link href="/meals/share">음식 레시피 공유하기</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>데이터 로딩중 ...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
