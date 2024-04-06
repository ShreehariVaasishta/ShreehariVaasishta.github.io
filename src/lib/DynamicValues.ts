import {
  ICombinedInformation,
  IDirectMessageItem,
  IInitialInformation,
  ITitledListItem,
} from "./Models";

class DynamicValues {
  static initialInformation: IInitialInformation = {
    iconText: "Fa",
    name: "Shreehari Vaasistha L",
    occupation: "Software Development Engineer",
  };

  static directMessageItems: Array<IDirectMessageItem> = [
    {
      name: "twitter",
      link: "https://twitter.com/Hary86389970",
    },
    {
      name: "Telegram",
      link: "https://t.me/cult_of_kosmos",
    },
  ];

  static about: Array<ITitledListItem> = [
    {
      text: "Information",
      shouldNotSort: true,
      arr: [
        {
          title: "Name",
          desc: "Shreehari Vaasistha L",
          logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
        },
        {
          title: "Work Experience",
          desc: "2+ years",
          logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png",
        },
        {
          title: "Languages",
          desc: "English, Hindi, Kannada",
          logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png",
        },
        {
          title: "Nationality",
          desc: "Indian",
          logo: "https://img.icons8.com/color/48/india.png",
        },
        {
          title: "Resume",
          desc: "Click the link icon to view/download",
          link: "https://github.com/ShreehariVaasishta/shreeharivl.github.io/blob/main/assets/Shreehari_Vaasistha_L_Resume.pdf",
          logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png",
        },
      ],
    },
    {
      text: "Experiences",
      arr: [
        {
          title: "AI Planet (formerly DPhi)",
          desc: "Software Development Engineer / Founding Team",
          logo: "https://framerusercontent.com/images/aH0aUDpSiUrVC1nwJAwiUCXUtU.svg",
        },
        {
          title: "AI Planet (formerly DPhi)",
          desc: "Backend Developer - Intern",
          logo: "https://framerusercontent.com/images/aH0aUDpSiUrVC1nwJAwiUCXUtU.svg",
        },
      ],
    },
  ];

  static skills: Array<ITitledListItem> = [
    {
      text: "Programming / Markup Languages",
      shouldNotSort: true,
      arr: [
        {
          title: "Python",
          logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
        },
        {
          title: "Go",
          logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
        },
        {
          title: "JavaScript",
          logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
        },
        {
          title: "HTML",
          logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
        },
        {
          title: "CSS",
          logo: "https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png",
        },
        {
          title: "TypeScript",
          logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
        },
      ],
    },
    {
      text: "Databases",
      shouldNotSort: true,
      arr: [
        {
          title: "MySQL",
          logo: "https://img.icons8.com/external-those-icons-flat-those-icons/24/external-MySQL-programming-and-development-those-icons-flat-those-icons.png",
        },
        {
          title: "PostgreSQL",
          logo: "https://img.icons8.com/color/48/postgreesql.png",
        },
        {
          title: "MongoDB",
          logo: "https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png",
        },
      ],
    },

    {
      text: "Libraries / Frameworks / Tools",
      shouldNotSort: true,
      arr: [
        {
          title: "DJango",
          logo: "https://static.djangoproject.com/img/logos/django-logo-negative.svg",
        },

        {
          title: "ReactJS",
          logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        },
        {
          title: "NextJS",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/1b988896-5ab2-42b4-a4f3-153d42c6488c",
        },
        {
          title: "Beautiful soup",
          logo: "https://github.com/3r4y/react-portfolio-template/assets/6418354/c9199eab-529b-4314-a990-c46deba899e9",
        },
        {
          title: "FastAPI",
          logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
        },
        {
          title: "Flask",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/2183bb2b-7680-49f1-a626-b1f647e7d656",
        },
        {
          title: "NgInx",
          logo: "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg",
        },
        {
          title: "Git",
          logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        },
      ],
    },
    {
      text: "UI Component Libraries",
      shouldNotSort: true,
      arr: [
        {
          title: "Material-UI",
          logo: "https://mui.com/static/logo.png",
        },
        {
          title: "Bootstrap",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
        },
      ],
    },
    {
      text: "Containarization and Orhestration",
      shouldNotSort: true,
      arr: [
        {
          title: "Docker",
          logo: "https://cdn.iconscout.com/icon/free/png-128/docker-226091.png",
        },
        {
          title: "Kubernetes",
          logo: "https://img.icons8.com/color/48/kubernetes.png",
        },
      ],
    },
    {
      text: "Cloud",
      arr: [
        {
          title: "AWS",
          logo: "https://cdn.iconscout.com/icon/free/png-128/aws-1869025-1583149.png",
        },
        {
          title: "GCP",
          logo: "https://img.icons8.com/color/48/google-cloud.png",
        },
        {
          title: "DigitalOcean",
          logo: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
        },
        {
          title: "Heroku",
          logo: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
        },
      ],
    },
    {
      text: "Others",
      arr: [
        {
          title: "Vim",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/544px-Vimlogo.svg.png?20150726190850",
        },
        {
          title: "VS Code",
          logo: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
        },
        {
          title: "Yarn",
          logo: "https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg",
        },
        {
          title: "npm",
          logo: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg",
        },
        {
          title: "Linux Distros (Ubuntu/ Fedora/ MX Linux/ Linux Mint)",
          logo: "https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png",
        },
      ],
    },
  ];

  static projects: Array<ITitledListItem> = [
    {
      text: "Personal/ OpenSource Projects",
      shouldNotSort: true,
      arr: [
        {
          title: "KServe",
          link: "https://github.com/kserve/kserve/",
          logo: "https://kserve.github.io/website/0.11/images/logo/kserve.png",
          desc: "Highly scalable and standards based Model Inference Platform on Kubernetes for Trusted AI",
        },
        {
          title: "KCD V1",
          link: "https://github.com/ShreehariVaasishta/kcd-v1",
          logo: "https://img.icons8.com/external-basicons-color-edtgraphics/50/external-Infinite-abstract-basicons-color-edtgraphics.png",
          desc: "Codebuild inspired CI/CD app that runs on Kubernetes.",
        },
        {
          title: "Django Packages",
          link: "https://github.com/djangopackages/djangopackages",
          logo: "https://raw.githubusercontent.com/djangopackages/djangopackages/main/design/logo_v2/logo.svg",
          desc: "A directory of reusable Django apps, sites, tools and more.",
        },
        {
          title: "k8s-e-listen",
          link: "https://github.com/ShreehariVaasishta/k8s-e-listen",
          logo: "https://img.icons8.com/clouds/100/cloud-calendar.png",
          desc: "A simple app to listen to events on Kubernetes.",
        },
      ],
    },
  ];

  static contacts: Array<ITitledListItem> = [
    {
      text: "Contact me",
      arr: [
        {
          title: "Email",
          logo: "https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png",
          desc: "shreehari9481@gmail.com",
          link: "mailto:shreehari9481@gmail.com",
        },
        {
          title: "Telegram",
          logo: "https://cdn-icons-png.flaticon.com/128/2111/2111646.png",
          desc: "@cult_of_kosmos",
          link: "https://t.me/cult_of_kosmos",
        },
      ],
    },
    {
      text: "Others",
      shouldNotSort: true,
      arr: [
        {
          title: "GitHub",
          logo: "https://cdn-icons-png.flaticon.com/128/1051/1051275.png",
          link: "https://github.com/ShreehariVaasishta",
        },
        {
          title: "LinkedIn",
          logo: "https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png",
          link: "https://www.linkedin.com/in/shreehari-vaasistha-l/",
        },
        {
          title: "Twitter",
          logo: "https://user-images.githubusercontent.com/6418354/155841031-532d5d6e-797a-4da1-8064-48d266b69ab2.png",
          link: "https://twitter.com/Hary86389970",
        },
        // {
        //     title: 'Fiverr',
        //     logo: 'https://cdn.worldvectorlogo.com/logos/fiverr-1.svg',
        //     link: 'https://www.fiverr.com/users/shreehari/'
        // },
        {
          title: "Medium",
          logo: "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png",
          link: "https://medium.com/@shreehari9481",
        },
        {
          title: "Hashnode",
          logo: "https://img.icons8.com/color/48/hashnode.png",
          link: "https://shreehari.hashnode.dev/",
        },
      ],
    },
    {
      text: "Thank you for visiting my portfolio",
      arr: [],
    },
  ];
}

//
// Dont change anything below this line
//
export const combinedInformation: ICombinedInformation = {
  initialInformation: DynamicValues.initialInformation,
  directMessageItems: DynamicValues.directMessageItems,
  routes: [
    {
      name: "About",
      items: DynamicValues.about,
    },
    {
      name: "Skills",
      items: DynamicValues.skills,
    },
    {
      name: "Projects",
      items: DynamicValues.projects,
    },
    {
      name: "Contact",
      items: DynamicValues.contacts,
    },
  ],
};
