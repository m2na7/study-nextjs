import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/action";
import classes from "./page.module.css";

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          가장 좋아하는 <span className={classes.highlight}>레시피</span>를
          공유하세요
        </h1>
        <p>공유하고 싶은 음식을 자유롭게 작성하세요!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">제목</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">내용 요약</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">레시피 내용</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          <p className={classes.actions}>
            <button type="submit">공유하기</button>
          </p>
        </form>
      </main>
    </>
  );
}
