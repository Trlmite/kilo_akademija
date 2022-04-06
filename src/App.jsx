import React from 'react';
//components
import Header from './components/header/header';
import Pricing from './components/pricing/pricing';
import ProgramReview from './components/program-review/program-review';
import UserReview from './components/user-reviews/user-review';
import YogaPros from './components/yoga-pros/pros';
import Button from './components/button/button';
import Preview from './components/preview/preview';
import FAQ from './components/faq/faq';

//styles
import styles from './styles/app.module.css'

//images&SVG's
import { ReactComponent as PlanIcon } from './svg/planIcon.svg'
import { ReactComponent as ExerciseIcon } from './svg/exercise.svg'
import { ReactComponent as ShoeIcon } from './svg/shoe.svg'
import { ReactComponent as DietIcon } from './svg/diet.svg'
import { ReactComponent as WhistleIcon } from './svg/whistle.svg'
import { ReactComponent as WatchIcon } from './svg/smartwatch.svg'
import { ReactComponent as BookCheckIcon } from './svg/bookcheck.svg'

import User1Img from './images/user1.jpg'
import User2Img from './images/user2.jpg'
import User3Img from './images/user3.jpg'


const data = [
  {
    svg: <PlanIcon />,
    title: 'A personalized yoga program',
    describtion: 'Completely safe and focused on your key goals',
    id: 1,
  },
  {
    svg: <ExerciseIcon />,
    title: 'Easy & enjoyable yoga workouts for your level',
    describtion: 'Program adjusts to your level and pace',
    id: 2
  },
  {
    svg: <ShoeIcon />,
    title: 'No special preparation needed',
    describtion: 'Perfect for begginners! Requires no special preparation or equipment',
    id: 3
  },
  {
    svg: <DietIcon />,
    title: 'Daily motivation & accountability',
    describtion: 'Track your progress, develop a healthy routine, reach goals faster',
    id: 4
  },
  {
    svg: <WhistleIcon />,
    title: 'Daily motivation & accountability',
    describtion: 'Track your progress, develop a healthy routine, reach goals faster',
    id: 5
  },
  {
    svg: <WatchIcon />,
    title: 'Browse from various yoga challenges',
    describtion: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
    id: 6
  },
  {
    svg: <BookCheckIcon />,
    title: 'A complete guide to get started',
    describtion: 'Best tips, guidelines, advice, and recommendations for successful practice',
    id: 7
  },
]
const userReviews = [
  {
    user: "Emily",
    age: 28,
    location: "Delaware, NJ",
    review: "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
    userImg: User1Img
  },
  {
    user: "Kylie",
    age: 40,
    location: "Los Angeles",
    review: "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
    userImg: User2Img
  },
  {
    user: "Jesica",
    age: 51,
    location: "San Francisco, CA",
    review: "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
    userImg: User3Img
  },
]
const pros = [
  {
    id: 1,
    text: "Each program adapts to your age or fitness level"
  },
  {
    id: 2,
    text: "Mindful way to exercise and get real results"
  },
  {
    id: 3,
    text: "Effective and long-term lasting results"
  },
  {
    id: 4,
    text: "Suited activities that benefit both the mind and body"
  },
  {
    id: 5,
    text: "Low-intensity but highly-effective workouts"
  },
  {
    id: 6,
    text: "Extra attention to muscle, joint and back health"
  },
]
const faq =[
  {
    title:'What happens after I order?',
    content: 'After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.',
    id: 1,
  },{
    title:'Where I can access my plan?',
    content: "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase.",
    id: 2,
  },{
    title:'How can I cancel my subscription?',
    content: 'You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app',
    id: 3,
  },{
    title:'Why this program is paid?',
    content: 'We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback!',
    id: 4,
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
      <div className={styles.container}>
        <Pricing 
        />
        <div>
        <h3 className={styles.margin}>What's in my program?</h3>
        {data.map(x =>
          <ProgramReview
            key={x.id}
            svg={x.svg}
            title={x.title}
            description={x.describtion}
          />
        )}
        </div>
      </div>
      <div>
        <h3 className={styles.margin}>Hear success stories from our clients</h3>
        <div className={styles.container}>
          {userReviews.map(user => 
            <UserReview
              key={user.age}
              user={user.user}
              age={user.age}
              location={user.location}
              userImg={user.userImg}
              review={user.review}
            />
          )}
        </div>
        <div className={styles.container}>
          <Button
            text='Get my plan'
          />
        </div>
      </div>
      <div>
        <div className={`${styles.container} ${styles.previewContainer}`}>
          <div>
            <h3 className={styles.margin}>Is Positive Yoga right for me?</h3>
            {pros.map(pro =>
              <YogaPros
                key={pro.id}
                content={pro.text}
              />
              )}
          </div>
          <div>
            <h3 className={styles.margin}>Start your yoga journey now!</h3>
            <div>
              <Preview/>
            </div>
          </div>
        </div>
        <div className={styles.faqContainer}>
          <h3 className={styles.margin}>Frequently Asked Questions </h3>
          {faq.map(question =>
            <FAQ
              key={question.id}
              title={question.title}
              content={question.content}
            />
            )}
          <div className={styles.container}>
            <Button
              text='Get my plan'
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Pricing 
        />
        <div>
        <h3 className={styles.margin}>What's in my program?</h3>
        {data.map(x =>
          <ProgramReview
            key={x.id}
            svg={x.svg}
            title={x.title}
            description={x.describtion}
          />
        )}
        </div>
      </div>
    </>
  );
}

export default App;
