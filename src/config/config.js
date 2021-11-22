// import resume from "../../public/img/CV_Simon_Selvadurai.pdf";
export const configuration = {
  Navbar: {
    NavbarTitle: "Simon Selvadurai",
    NabarOptions: ["portfolio", "about", "contact"],
  },
  Masthead: {
    MastheadTitle: "Simon Selvadurai",
    Labels: ["MERN Full Stack", "Node.js","Express.js","GraphQL", "MongoDB"],
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
    AboutMe1Sec: `Hi, I'm Simon!
    I'm a Full Stack Web Developer based in Melbourne, Australia. 
    `,
    AboutMe2Sec: `
    Monash University Coding Bootcamp in Full Stack Web Technologies.  

    Skills : React, Node.js, Express, MySQL, MongoDB, JavaScript, jQuery, Material UI, Bootstrap and CSS`,
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
