import React from 'react';
import Header from './components/header/header';
import Pricing from './components/pricing/pricing';
import ProgramReview from './components/program-review/program-review';
import styles from './styles/app.module.css'

import { ReactComponent as PlanIcon } from './svg/planIcon.svg'
import { ReactComponent as ExerciseIcon } from './svg/exercise.svg'
import { ReactComponent as ShoeIcon } from './svg/shoe.svg'
import { ReactComponent as DietIcon } from './svg/diet.svg'
import { ReactComponent as WhistleIcon } from './svg/whistle.svg'
import { ReactComponent as WatchIcon } from './svg/smartwatch.svg'
import { ReactComponent as BookCheckIcon } from './svg/bookcheck.svg'


const data = [
  {
    svg: <PlanIcon/>,
    title: 'A personalized yoga program',
    describtion: 'Completely safe and focused on your key goals',
    id: 1,
  },
  {
    svg: <ExerciseIcon/>,
    title: 'Easy & enjoyable yoga workouts for your level',
    describtion: 'Program adjusts to your level and pace',
    id: 2
  },
  {
    svg: <ShoeIcon/>,
    title: 'No special preparation needed',
    describtion: 'Perfect for begginners! Requires no special preparation or equipment',
    id: 3
  },
  {
    svg: <DietIcon/>,
    title: 'Daily motivation & accountability',
    describtion: 'Track your progress, develop a healthy routine, reach goals faster',
    id: 4
  },
  {
    svg: <WhistleIcon/>,
    title: 'Daily motivation & accountability',
    describtion: 'Track your progress, develop a healthy routine, reach goals faster',
    id: 5
  },
  {
    svg: <WatchIcon/>,
    title: 'Browse from various yoga challenges',
    describtion: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
    id: 6
  },
  {
    svg: <BookCheckIcon/>,
    title: 'A complete guide to get started',
    describtion: 'Best tips, guidelines, advice, and recommendations for successful practice',
    id: 7
  },
]


const App = () => {
  return (
    <>
    <Header
      discount="50"
      timeLeft="00:05:50"
      ordersNo="52 147"
    />
    <Pricing/>
    <h3 className={styles.margin}>What's in my program?</h3>
    {data.map(x => 
      <ProgramReview
        key={x.id}
        svg={x.svg}
        title={x.title}
        description={x.describtion}
      />
    )}
    <h3 className={styles.margin}>Hear success stories from our clients</h3>
    </>
  );
}

export default App;
