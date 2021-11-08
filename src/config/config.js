// import resume from "../../public/img/CV_Simon_Selvadurai.pdf";
export const configuration = {
  Navbar: {
    NavbarTitle: "Simon Selvadurai",
    NabarOptions: ["portfolio", "about", "contact"],
  },
  Masthead: {
    MastheadTitle: "Simon Selvadurai",
    Labels: ["JavaScript", "MERN Stack developer", "Frontend Developer"],
  },
  Portfolio: {
    PortfolioTitle: "my work",
    PortfolioItems: [
      { image: "img/portfolio/cabin.png", name: "MedConnect360", des: "Medical Appointment App" ,github:"https://github.com/SimonMSelvadurai/medconnect360", live : "https://medconnect360.herokuapp.com/" },
      { image: "img/portfolio/cake.png", name: "Cryptofolio", des: "Crypt My World", github:"https://github.com/SimonMSelvadurai/Cryptfolio",live:"https://lallender.github.io/Cryptfolio/" },
      { image: "img/portfolio/game.png", name: "Find your Dream Book", des:"Find your dream book",github:"https://github.com/SimonMSelvadurai/MERN-Book-Search-Engine",live :"https://findyourdreambook.herokuapp.com/" },
      {
        image: "img/portfolio/submarine.png",
        name: "TravelBug",
        des: "Plan your Dream Vaccation",
        github:"https://github.com/SimonMSelvadurai/TravelBug",live:"https://p2-group-5.herokuapp.com/"
      },
    ],
  },
  About: {
    AboutTitle: "About",
    AboutMe1Sec: `I am full stack developer, finished by bootcamp course from Monash University. 
        I have hands on experience with HTML,CSS,JQuery,Bootstrap,
        NodeJS,ExpressJS,MySQL,MongoDB,React.`,
    AboutMe2Sec: `Portfolio has the list of projects done during the bootcamp!`,
    ButtonName: "Resume !",
    ButtonIconFontAwesome: "fas fa-download mr-2",
    ButtonSite:"/img/CV_Simon_Selvadurai.pdf"
    
  },
  Footer: {
    // section1:{
    //     title:'Location',
    //     address1:'Siddiqui House',
    //     address2:'Mohalla Gharibabad'
    // },
    section2: {
      title: "Around the Web",
      // facebook:'https://web.facebook.com/valeed.anjum.1',
      // twitter:'https://twitter.com/ValeedAnjum2',
      // dribbble:'https://www.linkedin.com',
      linkedin: "https://www.linkedin.com/in/simon-selvadurai-850ab3117/",
      github: "https://github.com/SimonMSelvadurai",
    },
    // section3:{
    //     title:'yourportfolio',
    //     description:'YOURPORTFOLIO is free to use, MIT licensed theme created by Valeed Anjum.'
    // }
  },
};
