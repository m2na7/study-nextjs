import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if(!meal) {
      notFound();
  }

  // 특수문자로 식별시에 줄바꿈
  meal.instructions = meal.instructions.replace(/\n/g, "<br />")

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          // 내용을 HTML로 출력하면 XSS에 노출, 검증하기 위해 추가
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
