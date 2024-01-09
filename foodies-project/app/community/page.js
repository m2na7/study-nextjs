import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          우리들의 열정 : <span className={classes.highlight}>음식</span>
        </h1>
        <p>커뮤니티에 가입하고, 좋아하는 요리와 레시피를 공유하세요 !</p>
      </header>
      <main className={classes.main}>
        <h2>가입시 혜택</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>새로운 레시피를 공유하고 탐색하기</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>나와 비슷한 취향의 새로운 친구들과의 소통</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>여러가지 혜택의 이벤트 참여</p>
          </li>
        </ul>
      </main>
    </>
  );
}