import ProjectImg from '../Images/dummyImage.png';
import DiceGame from '../Images/DiceGame.png';
import NotesTakingApp from '../Images/NotesTakingApp.png'
import SimonGame from '../Images/SimonGame.png'
import portfolio from '../Images/portfolio.png'
import myShop from '../Images/MyShop.png'
import newDiceGame from "../Images/newDiceGame.png"
import bgChanger from "../Images/bgChanger.png"
import BlogWebsite from "../Images/BlogWebsite.png"
import ContactUsPage from "../Images/ContactUsPage.png"

const projects = [
  {
    id: 1,
    name: 'Portfolio',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: portfolio,
    link: 'https://github.com/dishankkumaryadav/portfolio.git',
  },
  {
    id: 2,
    name: 'My Shop',
    desc:
    'MyShop is an Ecommerce website. It works similar to other ecommerce website like Flipkart, Amazon where you selected your desired product and order from home.',
    img: myShop,
    link: 'https://github.com/dishankkumaryadav/MyShop',
  },
  {
    id: 3,
    name: 'Notes Taking App',
    desc:
    'Notes Taking App is website where you can take notes on your browser only and no external app is needed.',
    img: NotesTakingApp,
    link: 'https://dishankkumaryadav.github.io/Projects/Notes-Taking-App/index.html',
  },
  {
    id: 4,
    name: "Simon Game",
    desc:
    'Simon is a simple electronic memory game: the user has to repeat a growing sequence of colors. The sequence is displayed by lighting up the LEDs. Each color also has a corresponding tone.',
    img: SimonGame,
    link: 'https://dishankkumaryadav.github.io/Simon-Game/',
  },
  {
    id: 5,
    name: 'Dice Game',
    desc:
    'Dice games are games that use or incorporate one or more dice as their sole or central component, usually as a random device.',
    img: DiceGame,
    link: ' https://dishankkumaryadav.github.io/Dice-game/',
  },
  {
    id: 6,
    name: 'New Dice Game',
    desc:
    'Dice games are games that use or incorporate one or more dice as their sole or central component, usually as a random device.',
    img: newDiceGame,
    link: ' https://dice-game-beige-alpha.vercel.app/',
  },
  {
    id: 7,
    name: 'Bg Changer',
    desc:
    'In this website you can change website backgroud from just selecting color in the given pallette.',
    img: bgChanger,
    link: ' https://bg-changer-amber.vercel.app/',
  },
  {
    id: 8,
    name: 'Blog Website',
    desc:
    'It is a simple Blog website create using HTML and CSS',
    img: BlogWebsite,
    link: ' https://dishankkumaryadav.github.io/BlogWebsite/',
  },
  {
    id: 9,
    name: 'Contact US Page',
    desc:
    'A contact page created by using React ',
    img: ContactUsPage,
    link: ' https://contact-us-page-8zlko2dw9-dishankkumaryadavs-projects.vercel.app/',
  },
];

export default projects;