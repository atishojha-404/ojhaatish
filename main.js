var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal")

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

var instagram = "https://www.instagram.com/atish.ojha.404/";
var facebook = "https://www.facebook.com/atish.ojha.404/";
var github = "https://github.com/atishojha-404/";
var linkedin = "https://www.linkedin.com/in/atish-ojha404/";
var stackoverflow = "https://stackoverflow.com/users/14428583/atish-ojha/";
var codepen = "https://codepen.io/atish-ojha-404/";
var email = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=" + encodeURIComponent('ojhaatish11@gmail.com');

 
  

  



whoareyou = [
    "<br>",
    '<span class="whoareyou">Hello, My name is Atish Ojha, and I`m delighted to have the opportunity to introduce myself to all of you. I am a passionate and dedicated individual with a profound love for technology and a strong background in computer system engineering. I pursued my BSc (Hons) in Computer System Engineering from ISMT College in Kathmandu, Nepal, which is affiliated with the esteemed University of Sunderland in London. This educational journey allowed me to acquire a deep understanding of the foundations of computer systems and develop crucial problem-solving skills. Currently, I am working as a software engineer, where I have the privilege of putting my knowledge into practice. It`s an exhilarating role that challenges me to continually explore innovative solutions and expand my technical expertise. What truly drives me is the constant evolution of the technology landscape. I am always eager to stay updated with the latest developments and industry trends, which helps me bring a fresh perspective to my work and deliver exceptional results. In addition to my technical skills, I am a strong believer in the power of collaboration and teamwork. I thrive in environments where ideas are exchanged freely, and diverse perspectives are valued. I find immense joy in working alongside like-minded individuals who share a common goal of achieving excellence. Outside of work, I enjoy immersing myself in various hobbies and interests. Whether it`s reading books on emerging technologies, participating in tech meetups, or engaging in personal coding projects, I am constantly seeking ways to fuel my passion and nurture my personal growth. Thank you for your time.</span>',
    "<br>"
];


// List of whoami
const whoami = [
    '<span class="whoami">  You are a seeker of truth and meaning, constantly exploring the depths of your own consciousness and questioning the world around you. But ultimately, who you are is an ever-evolving journey.</span>',
    '<span class="whoami">  You are shaped by the wisdom passed down through generations, the books you`ve read, the cultures you`ve immersed yourself in, and the conversations you`ve had with diverse individuals. But ultimately, who you are is an ever-evolving journey.</span>',
    '<span class="whoami">  You are a culmination of your past, carrying the imprints of your upbringing, the relationships you`ve nurtured, and the adversities you`ve faced. But ultimately, who you are is an ever-evolving journey.</span>',
    '<span class="whoami">  You are defined by how you have grown from those experiences, embracing resilience, compassion, and empathy as guiding principles. But ultimately, who you are is an ever-evolving journey.</span>',
    '<span class="whoami">  You are a dreamer, driven by aspirations and ambitions that extend beyond the confines of societal expectations. You believe in the power of imagination, creativity, and innovation to bring about positive change in the world. But ultimately, who you are is an ever-evolving journey.</span>',
    '<span class="whoami">  You are a continuous learner, forever curious about the wonders of the universe and the mysteries of life. You find solace in acquiring knowledge, expanding your perspectives, and challenging your own assumptions. But ultimately, who you are is an ever-evolving journey.</span>',
    '<span class="whoami">  You are the product of countless moments of joy, pain, triumph, and resilience. You are the sum of your relationships, the connections you `ve made, and the impact you`ve had on others. You are shaped by the lessons learned from both successes and failures, which have guided your growth and understanding of the world. But ultimately, who you are is an ever-evolving journey.</span>',
    '<span class="whoami">  You are a seeker of knowledge, constantly curious and eager to expand your horizons. You find meaning and purpose in pursuing your passions, whether it be through art, science, or the exploration of the human condition. You strive to make a positive difference, however small, in the lives of those around you. But ultimately, who you are is an ever-evolving journey.</span>',
    '<span class="whoami">  You are a complex blend of contradictions—a mixture of strength and vulnerability, confidence and self-doubt. Embrace your flaws and imperfections, understanding that they contribute to your uniqueness and humanity. But ultimately, who you are is an ever-evolving journey.</span>'
  ];


social = [
    "<br>",
    'instagram         <a href="' + instagram + '"     target="_blank">instagram/atish.ojha.404' + "</a>",
    'facebook          <a href="' + facebook + '"      target="_blank">facebook/atish.ojha.404' + "</a>",
    'github            <a href="' + github + '"        target="_blank">github/atishojha-404' + "</a>",
    'linkedin          <a href="' + linkedin + '"      target="_blank">linkedin/atish-ojha404' + "</a>",
    'stackoverflow     <a href="' + stackoverflow + '" target="_blank">stackoverflow/atish-ojha' + "</a>",
    'codepen           <a href="' + codepen + '"       target="_blank">codepen/atish-ojha-404' + "</a>",
    "<br>"

];

help = [
    "<br>",
    '<span class="command">whoareyou</span>      Who is Atish Ojha?',
    '<span class="command">whoami</span>         Who are you?',
    '<span class="command">social</span>         List of Social Networks.',
    '<span class="command">email</span>          Feel free to email😇',
    '<span class="command">welcome</span>        Display welcome message.',
    '<span class="command">gui</span>            Graphical Mode.',
    '<span class="command">history</span>        View command history.',
    '<span class="command">reload</span>         Reload terminal.',
    '<span class="command">clear</span>          Clear terminal.',
    '<span class="command">exit</span>           Close terminal👾',

    "<br>"
];

welcome = [

    '<span class="index">Hello and Namaste!!</span>',

    '<pre id="tiresult" style="font-size: 9px; background-color: #000000; font-weight: bold; padding: 4px 5px; --fs: 9px;">',
    '<b style="color:#0A0A0A">0</b><b style="color:#090909">0</b><b style="color:#080808">1101</b><b style="color:#090909">0</b><b style="color:#080808">111</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#080808">00</b><b style="color:#060606">0</b><b style="color:#090909">0</b><b style="color:#080808">101</b><b style="color:#070707">0</b><b style="color:#080808">0</b><b style="color:#090909">1</b><b style="color:#080808">11</b><b style="color:#060606">001</b><b style="color:#080808">110</b><b style="color:#060606">0110</b><b style="color:#050505">0</b><b style="color:#070707">0</b><b style="color:#090909">01</b><b style="color:#080808">1</b><b style="color:#060606">10</b><b style="color:#090909">0</b><b style="color:#060606">11</b><b style="color:#090909">0</b><b style="color:#080808">1</b><b style="color:#060606">11</b><b style="color:#070707">0</b><b style="color:#080808">1</b>',
    '<b style="color:#070707">10</b><b style="color:#060606">010</b><b style="color:#080808">1</b><b style="color:#090909">0</b><b style="color:#060606">1</b><b style="color:#080808">0</b><b style="color:#090909">0</b><b style="color:#060606">1</b><b style="color:#070707">0</b><b style="color:#090909">0</b><b style="color:#060606">1</b><b style="color:#070707">0</b><b style="color:#080808">11</b><b style="color:#070707">0</b><b style="color:#080808">11</b><b style="color:#070707">1</b><b style="color:#060606">0</b><b style="color:#050505">0</b><b style="color:#0C0C0C">1</b><b style="color:#141414">0</b><b style="color:#121212">0</b><b style="color:#0E0E0E">0</b><b style="color:#0C0C0C">1</b><b style="color:#080808">0</b><b style="color:#060606">0</b><b style="color:#070707">1</b><b style="color:#080808">1</b><b style="color:#060606">0</b><b style="color:#070707">1</b><b style="color:#080808">0</b><b style="color:#060606">1111</b><b style="color:#090909">0</b><b style="color:#080808">11</b><b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#080808">00</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#080808">1</b><b style="color:#050505">1</b>',
    '<b style="color:#060606">1</b><b style="color:#080808">11011</b><b style="color:#070707">0</b><b style="color:#090909">0</b><b style="color:#080808">0</b><b style="color:#060606">001</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#050505">1</b><b style="color:#060606">00</b><b style="color:#090909">1</b><b style="color:#080808">1</b><b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#090909">1</b><b style="color:#212121">0</b><b style="color:#262626">1</b><b style="color:#272727">0</b><b style="color:#333333">1</b><b style="color:#313131">1</b><b style="color:#262626">0</b><b style="color:#232323">1</b><b style="color:#0F0F0F">1</b><b style="color:#060606">111</b><b style="color:#050505">0</b><b style="color:#060606">0</b><b style="color:#070707">10</b><b style="color:#080808">1</b><b style="color:#060606">101</b><b style="color:#050505">1</b><b style="color:#080808">000101</b><b style="color:#070707">0</b><b style="color:#060606">0</b>',
    '<b style="color:#0A0A0A">0</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#080808">1</b><b style="color:#090909">0</b><b style="color:#070707">11</b><b style="color:#060606">0</b><b style="color:#070707">0</b><b style="color:#080808">1</b><b style="color:#090909">0</b><b style="color:#070707">00</b><b style="color:#060606">0</b><b style="color:#050505">0</b><b style="color:#070707">0</b><b style="color:#060606">1</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#070707">1</b><b style="color:#0A0A0A">0</b><b style="color:#252525">1</b><b style="color:#353535">0</b><b style="color:#3C3C3C">1</b><b style="color:#424242">1</b><b style="color:#363636">0</b><b style="color:#313131">1</b><b style="color:#343434">0</b><b style="color:#363636">1</b><b style="color:#2F2F2F">0</b><b style="color:#080808">1</b><b style="color:#060606">0</b><b style="color:#090909">0</b><b style="color:#070707">1</b><b style="color:#050505">1</b><b style="color:#060606">1</b><b style="color:#080808">1</b><b style="color:#060606">010</b><b style="color:#090909">1</b><b style="color:#060606">000</b><b style="color:#090909">1</b><b style="color:#070707">11</b><b style="color:#060606">1</b><b style="color:#050505">11</b>',
    '<b style="color:#080808">0</b><b style="color:#060606">0</b><b style="color:#080808">0</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#050505">1</b><b style="color:#060606">1</b><b style="color:#080808">0</b><b style="color:#070707">0</b><b style="color:#060606">1</b><b style="color:#080808">000</b><b style="color:#060606">0</b><b style="color:#070707">1</b><b style="color:#060606">00</b><b style="color:#090909">0</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#1F1F1F">0</b><b style="color:#353535">0</b><b style="color:#222222">0</b><b style="color:#191919">1</b><b style="color:#181818">1</b><b style="color:#161616">0</b><b style="color:#101010">0</b><b style="color:#161616">1</b><b style="color:#2A2A2A">0</b><b style="color:#3A3A3A">0</b><b style="color:#202020">1</b><b style="color:#090909">1</b><b style="color:#060606">10</b><b style="color:#070707">100</b><b style="color:#060606">00</b><b style="color:#070707">0</b><b style="color:#060606">1</b><b style="color:#080808">1</b><b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#080808">001</b><b style="color:#070707">1</b><b style="color:#080808">1</b><b style="color:#060606">0</b>',
    '<b style="color:#080808">01</b><b style="color:#070707">0</b><b style="color:#060606">110</b><b style="color:#070707">0</b><b style="color:#080808">0</b><b style="color:#070707">1</b><b style="color:#090909">1</b><b style="color:#080808">00</b><b style="color:#060606">01</b><b style="color:#080808">1</b><b style="color:#060606">01</b><b style="color:#080808">0</b><b style="color:#101010">0</b><b style="color:#151515">1</b><b style="color:#111111">0</b><b style="color:#0C0C0C">0</b><b style="color:#050505">1</b><b style="color:#060606">1</b><b style="color:#050505">1</b><b style="color:#070707">1</b><b style="color:#080808">100</b><b style="color:#0E0E0E">0</b><b style="color:#252525">1</b><b style="color:#272727">0</b><b style="color:#080808">0</b><b style="color:#060606">1</b><b style="color:#070707">1</b><b style="color:#060606">01</b><b style="color:#080808">0</b><b style="color:#060606">0</b><b style="color:#070707">11</b><b style="color:#060606">0</b><b style="color:#070707">01</b><b style="color:#080808">1</b><b style="color:#060606">1</b><b style="color:#080808">0</b><b style="color:#070707">1</b><b style="color:#080808">11</b>',
    '<b style="color:#070707">01</b><b style="color:#060606">00</b><b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#070707">1</b><b style="color:#080808">10</b><b style="color:#070707">1</b><b style="color:#060606">1100</b><b style="color:#050505">1</b><b style="color:#080808">1</b><b style="color:#060606">0</b><b style="color:#0C0C0C">0</b><b style="color:#2B2B2B">0</b><b style="color:#060606">0</b><b style="color:#070707">00</b><b style="color:#080808">1</b><b style="color:#070707">0</b><b style="color:#060606">1</b><b style="color:#070707">01</b><b style="color:#080808">1</b><b style="color:#060606">01</b><b style="color:#050505">0</b><b style="color:#141414">0</b><b style="color:#111111">0</b><b style="color:#070707">0</b><b style="color:#080808">10</b><b style="color:#060606">0</b><b style="color:#070707">1</b><b style="color:#060606">0110</b><b style="color:#080808">0</b><b style="color:#070707">1</b><b style="color:#060606">0</b><b style="color:#070707">0</b><b style="color:#060606">11</b><b style="color:#080808">1</b><b style="color:#090909">1</b>',
    '<b style="color:#060606">0</b><b style="color:#080808">1</b><b style="color:#070707">01</b><b style="color:#080808">0</b><b style="color:#060606">11</b><b style="color:#080808">0</b><b style="color:#060606">10</b><b style="color:#080808">1</b><b style="color:#070707">1</b><b style="color:#090909">1</b><b style="color:#060606">1</b><b style="color:#040404">1</b><b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#0A0A0A">0</b><b style="color:#272727">0</b><b style="color:#0E0E0E">0</b><b style="color:#060606">0</b><b style="color:#070707">0</b><b style="color:#060606">00</b><b style="color:#040404">0</b><b style="color:#060606">10</b><b style="color:#080808">1</b><b style="color:#070707">0</b><b style="color:#080808">1</b><b style="color:#060606">0</b><b style="color:#111111">1</b><b style="color:#0A0A0A">1</b><b style="color:#060606">0</b><b style="color:#040404">1</b><b style="color:#060606">10</b><b style="color:#080808">01</b><b style="color:#060606">0</b><b style="color:#090909">1</b><b style="color:#080808">01</b><b style="color:#060606">0</b><b style="color:#090909">1</b><b style="color:#080808">01</b><b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#070707">0</b>',
    '<b style="color:#070707">01</b><b style="color:#050505">0</b><b style="color:#070707">1</b><b style="color:#080808">1</b><b style="color:#070707">1</b><b style="color:#080808">1</b><b style="color:#090909">0</b><b style="color:#060606">0</b><b style="color:#050505">0</b><b style="color:#080808">0</b><b style="color:#070707">1</b><b style="color:#050505">1</b><b style="color:#0C0C0C">1</b><b style="color:#171717">1</b><b style="color:#1D1D1D">1</b><b style="color:#232323">1</b><b style="color:#2F2F2F">01</b><b style="color:#252525">0</b><b style="color:#111111">0</b><b style="color:#060606">10</b><b style="color:#080808">1</b><b style="color:#060606">00</b><b style="color:#080808">0</b><b style="color:#060606">1</b><b style="color:#080808">0</b><b style="color:#111111">0</b><b style="color:#171717">1</b><b style="color:#1D1D1D">0</b><b style="color:#2B2B2B">0</b><b style="color:#1E1E1E">0</b><b style="color:#171717">1</b><b style="color:#161616">1</b><b style="color:#0A0A0A">1</b><b style="color:#060606">001</b><b style="color:#070707">0</b><b style="color:#060606">1</b><b style="color:#050505">1</b><b style="color:#060606">011</b><b style="color:#080808">0</b><b style="color:#060606">0</b><b style="color:#080808">0</b><b style="color:#060606">1</b>',
    '<b style="color:#080808">1</b><b style="color:#070707">1</b><b style="color:#060606">0</b><b style="color:#070707">00</b><b style="color:#060606">1</b><b style="color:#070707">1</b><b style="color:#080808">1</b><b style="color:#060606">01</b><b style="color:#070707">1</b><b style="color:#0C0C0C">0</b><b style="color:#131313">1</b><b style="color:#262626">1</b><b style="color:#313131">1</b><b style="color:#2E2E2E">1</b><b style="color:#2D2D2D">0</b><b style="color:#303030">1</b><b style="color:#2D2D2D">1</b><b style="color:#2E2E2E">1</b><b style="color:#232323">0</b><b style="color:#171717">1</b><b style="color:#080808">0</b><b style="color:#060606">0000</b><b style="color:#0C0C0C">0</b><b style="color:#141414">0</b><b style="color:#282828">1</b><b style="color:#262626">1</b><b style="color:#303030">011</b><b style="color:#3D3D3D">0</b><b style="color:#2A2A2A">0</b><b style="color:#1F1F1F">11</b><b style="color:#0A0A0A">0</b><b style="color:#080808">11</b><b style="color:#060606">11</b><b style="color:#080808">1</b><b style="color:#060606">11</b><b style="color:#080808">00</b><b style="color:#070707">0</b><b style="color:#060606">0</b>',
    '<b style="color:#060606">1</b><b style="color:#070707">0</b><b style="color:#080808">0</b><b style="color:#060606">10</b><b style="color:#080808">1</b><b style="color:#070707">11</b><b style="color:#060606">1</b><b style="color:#050505">0</b><b style="color:#171717">1</b><b style="color:#2E2E2E">0</b><b style="color:#222222">0</b><b style="color:#282828">1</b><b style="color:#2B2B2B">1</b><b style="color:#2E2E2E">01</b><b style="color:#212121">0</b><b style="color:#282828">0</b><b style="color:#2B2B2B">1</b><b style="color:#2E2E2E">0</b><b style="color:#313131">0</b><b style="color:#1F1F1F">0</b><b style="color:#111111">0</b><b style="color:#080808">0</b><b style="color:#090909">0</b><b style="color:#181818">0</b><b style="color:#272727">1</b><b style="color:#2E2E2E">1</b><b style="color:#2D2D2D">0</b><b style="color:#313131">0</b><b style="color:#2D2D2D">0</b><b style="color:#303030">0</b><b style="color:#292929">1</b><b style="color:#282828">1</b><b style="color:#272727">0</b><b style="color:#252525">0</b><b style="color:#2D2D2D">1</b><b style="color:#1F1F1F">0</b><b style="color:#111111">1</b><b style="color:#080808">1</b><b style="color:#060606">1</b><b style="color:#070707">1</b><b style="color:#080808">1</b><b style="color:#060606">0</b><b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#080808">1</b><b style="color:#0A0A0A">0</b><b style="color:#090909">1</b>',
    '<b style="color:#080808">11</b><b style="color:#070707">11111</b><b style="color:#090909">0</b><b style="color:#060606">1</b><b style="color:#141414">1</b><b style="color:#313131">0</b><b style="color:#282828">1</b><b style="color:#262626">1</b><b style="color:#202020">0</b><b style="color:#1D1D1D">0</b><b style="color:#282828">1</b><b style="color:#2D2D2D">1</b><b style="color:#2E2E2E">0</b><b style="color:#272727">0</b><b style="color:#1E1E1E">0</b><b style="color:#1F1F1F">1</b><b style="color:#222222">0</b><b style="color:#292929">1</b><b style="color:#1F1F1F">0</b><b style="color:#131313">0</b><b style="color:#171717">1</b><b style="color:#1E1E1E">0</b><b style="color:#202020">1</b><b style="color:#292929">1</b><b style="color:#212121">0</b><b style="color:#1F1F1F">1</b><b style="color:#232323">0</b><b style="color:#272727">0</b><b style="color:#282828">0</b><b style="color:#1B1B1B">1</b><b style="color:#232323">1</b><b style="color:#222222">1</b><b style="color:#282828">0</b><b style="color:#272727">1</b><b style="color:#252525">0</b><b style="color:#0D0D0D">1</b><b style="color:#050505">1</b><b style="color:#060606">111</b><b style="color:#080808">00</b><b style="color:#070707">00</b><b style="color:#090909">0</b>',
    '<b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#050505">0</b><b style="color:#060606">01</b><b style="color:#090909">1</b><b style="color:#080808">11</b><b style="color:#0A0A0A">0</b><b style="color:#1B1B1B">1</b><b style="color:#252525">00</b><b style="color:#202020">0</b><b style="color:#232323">1</b><b style="color:#272727">1</b><b style="color:#1B1B1B">1</b><b style="color:#191919">0</b><b style="color:#181818">1</b><b style="color:#161616">1</b><b style="color:#191919">1</b><b style="color:#181818">1</b><b style="color:#151515">1</b><b style="color:#1B1B1B">1</b><b style="color:#1C1C1C">1</b><b style="color:#171717">111</b><b style="color:#1C1C1C">0</b><b style="color:#191919">0</b><b style="color:#141414">0</b><b style="color:#1F1F1F">1</b><b style="color:#1E1E1E">1</b><b style="color:#151515">0</b><b style="color:#171717">00</b><b style="color:#1F1F1F">0</b><b style="color:#1E1E1E">1</b><b style="color:#262626">1</b><b style="color:#1C1C1C">1</b><b style="color:#1E1E1E">1</b><b style="color:#262626">0</b><b style="color:#101010">0</b><b style="color:#060606">0</b><b style="color:#080808">0</b><b style="color:#050505">1</b><b style="color:#070707">11</b><b style="color:#060606">011</b>',
    '<b style="color:#090909">0</b><b style="color:#080808">00</b><b style="color:#060606">10</b><b style="color:#080808">1</b><b style="color:#060606">1</b><b style="color:#090909">0</b><b style="color:#1F1F1F">1</b><b style="color:#232323">0</b><b style="color:#161616">1</b><b style="color:#151515">1</b><b style="color:#0F0F0F">1</b><b style="color:#0A0A0A">1</b><b style="color:#0B0B0B">1</b><b style="color:#080808">1</b><b style="color:#090909">0</b><b style="color:#060606">0</b><b style="color:#0A0A0A">0</b><b style="color:#0B0B0B">1</b><b style="color:#080808">10</b><b style="color:#0A0A0A">11</b><b style="color:#060606">1</b><b style="color:#0A0A0A">1</b><b style="color:#0C0C0C">0</b><b style="color:#080808">011</b><b style="color:#090909">1</b><b style="color:#0A0A0A">00</b><b style="color:#090909">00</b><b style="color:#0C0C0C">1</b><b style="color:#141414">1</b><b style="color:#1E1E1E">0</b><b style="color:#1C1C1C">0</b><b style="color:#131313">1</b><b style="color:#1C1C1C">1</b><b style="color:#232323">1</b><b style="color:#0B0B0B">1</b><b style="color:#080808">1</b><b style="color:#060606">01</b><b style="color:#070707">11</b><b style="color:#080808">1</b><b style="color:#070707">0</b>',
    '<b style="color:#090909">1</b><b style="color:#080808">0</b><b style="color:#060606">001</b><b style="color:#070707">1</b><b style="color:#0B0B0B">1</b><b style="color:#151515">0</b><b style="color:#161616">0</b><b style="color:#1A1A1A">0</b><b style="color:#141414">0</b><b style="color:#161616">1</b><b style="color:#0B0B0B">0</b><b style="color:#080808">0</b><b style="color:#050505">1</b><b style="color:#070707">1</b><b style="color:#090909">0</b><b style="color:#060606">1011</b><b style="color:#050505">1</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#050505">0</b><b style="color:#080808">1</b><b style="color:#070707">00</b><b style="color:#080808">01</b><b style="color:#060606">00</b><b style="color:#080808">0</b><b style="color:#060606">0</b><b style="color:#070707">0</b><b style="color:#060606">0</b><b style="color:#141414">0</b><b style="color:#1E1E1E">0</b><b style="color:#161616">0</b><b style="color:#151515">1</b><b style="color:#1E1E1E">1</b><b style="color:#1B1B1B">1</b><b style="color:#111111">0</b><b style="color:#060606">0</b><b style="color:#080808">01</b><b style="color:#060606">011</b><b style="color:#080808">0</b>',
    '<b style="color:#060606">000</b><b style="color:#070707">1</b><b style="color:#060606">1</b><b style="color:#050505">1</b><b style="color:#131313">1</b><b style="color:#1E1E1E">0</b><b style="color:#171717">1</b><b style="color:#151515">00</b><b style="color:#141414">0</b><b style="color:#0B0B0B">0</b><b style="color:#060606">01</b><b style="color:#070707">1</b><b style="color:#060606">0</b><b style="color:#050505">1</b><b style="color:#060606">1000</b><b style="color:#070707">0</b><b style="color:#050505">0</b><b style="color:#060606">11</b><b style="color:#070707">0</b><b style="color:#060606">00</b><b style="color:#080808">1</b><b style="color:#060606">0</b><b style="color:#070707">000</b><b style="color:#060606">01</b><b style="color:#0F0F0F">1</b><b style="color:#131313">0</b><b style="color:#111111">01</b><b style="color:#181818">1</b><b style="color:#1B1B1B">1</b><b style="color:#1A1A1A">0</b><b style="color:#131313">1</b><b style="color:#060606">0</b><b style="color:#080808">1010</b><b style="color:#090909">0</b>',
    '<b style="color:#060606">1</b><b style="color:#080808">0</b><b style="color:#090909">1</b><b style="color:#060606">1</b><b style="color:#080808">1</b><b style="color:#060606">1</b><b style="color:#101010">0</b><b style="color:#121212">1</b><b style="color:#161616">00</b><b style="color:#0E0E0E">0</b><b style="color:#0D0D0D">1</b><b style="color:#0A0A0A">0</b><b style="color:#060606">01</b><b style="color:#080808">1</b><b style="color:#070707">0</b><b style="color:#080808">00</b><b style="color:#060606">0</b><b style="color:#080808">1111</b><b style="color:#060606">1</b><b style="color:#070707">0</b><b style="color:#080808">0</b><b style="color:#070707">11</b><b style="color:#080808">1</b><b style="color:#060606">1</b><b style="color:#080808">0</b><b style="color:#060606">10</b><b style="color:#080808">0</b><b style="color:#060606">1</b><b style="color:#0B0B0B">0</b><b style="color:#131313">1</b><b style="color:#121212">0</b><b style="color:#101010">0</b><b style="color:#121212">0</b><b style="color:#111111">1</b><b style="color:#1B1B1B">0</b><b style="color:#131313">1</b><b style="color:#060606">0</b><b style="color:#080808">101</b><b style="color:#090909">0</b><b style="color:#070707">0</b>',
    '<b style="color:#050505">1</b><b style="color:#060606">1</b><b style="color:#080808">001</b><b style="color:#060606">1</b><b style="color:#0C0C0C">0</b><b style="color:#151515">1</b><b style="color:#111111">0</b><b style="color:#121212">1</b><b style="color:#0F0F0F">1</b><b style="color:#101010">0</b><b style="color:#090909">0</b><b style="color:#060606">1</b><b style="color:#050505">1</b><b style="color:#080808">00</b><b style="color:#050505">1</b><b style="color:#060606">0</b><b style="color:#070707">0</b><b style="color:#080808">1</b><b style="color:#060606">10</b><b style="color:#080808">1</b><b style="color:#070707">00</b><b style="color:#060606">1</b><b style="color:#050505">1</b><b style="color:#080808">100</b><b style="color:#090909">1</b><b style="color:#060606">0100</b><b style="color:#0C0C0C">1</b><b style="color:#101010">0</b><b style="color:#111111">1</b><b style="color:#161616">0</b><b style="color:#101010">0</b><b style="color:#0C0C0C">0</b><b style="color:#131313">1</b><b style="color:#0B0B0B">0</b><b style="color:#090909">1</b><b style="color:#080808">1</b><b style="color:#090909">0</b><b style="color:#080808">0</b><b style="color:#060606">1</b><b style="color:#080808">1</b>',
    '</pre>',

    '<span class="color2">Welcome to Ojha`s web terminal!!</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];








setTimeout(function () {
    loopLines(welcome, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);





textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    } else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML);
            git = commands.length;
            addLine("visitor@ojhaatish.com.np:~$ " + command.innerHTML, "no-animation", 0);
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }
        if (e.keyCode == 38 && git != 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }
        if (e.keyCode == 40 && git != commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } else {
                textarea.value = commands[git];
            }
            command.innerHTML = textarea.value;
        }
    }
}





function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}




// Function to get a random whoami paragraph
function getRandomParagraph(whoamiList) {
    const randomIndex = Math.floor(Math.random() * whoamiList.length);
    return whoamiList[randomIndex];
  }
  

  
  



function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "whoareyou":
            loopLines(whoareyou, "color2 margin", 80);
            break;
        case "whoami":
            // Assign random whoami paragraph
            var randomwhoami = getRandomParagraph(whoami);
            loopLines([randomwhoami], "color2 margin", 80);
            break;
        case "social":
            loopLines(social, "color2 margin", 80);
            break;
        case "email":
            addLine("Opening Email...", "color2", 80);
            newTab(email)
            break;
        case "welcome":
            loopLines(welcome, "", 80);
            break;
        case "gui":
            addLine("Opening GUI version...", "color2", 80);
            newTab("/gui.html")
            break;
        case "history":
            addLine("<br>", "", 0);
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;
        // socials
        case "instagram":
            addLine("Opening Instagram...", "color2", 0);
            newTab(instagram);
            break;
        case "facebook":
            addLine("Opening Facebook...", "color2", 0);
            newTab(facebook);
            break;
        case "github":
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
            break;
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            newTab(linkedin);
            break;
        case "stackoverflow":
            addLine("Opening Stack OverFlow...", "color2", 0);
            newTab(stackoverflow);
            break;
        case "codepen":
            addLine("Opening Codepen...", "color2", 0);
            newTab(codepen);
            break;
        case "clear":
            setTimeout(function () {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "reload":
            addLine("Reloading...", 80);
            location.reload();
            break;
        case "exit":
            addLine("Closing...", 80);
            window.location.replace('https://www.google.com');
            break;
        default:
            addLine("<span class=\"inherit\"><span class=\"command\">" + cmd + "</span>: command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}










function $(elid) {
    return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
    cursor = $("cursor");
    cursor.style.left = "0px";
}

function nl2br(txt) {
    return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
    e = e || window.event;
    var w = $("typer");
    var tw = from.value;
    if (!pw) {
        w.innerHTML = nl2br(tw);
    }
}

function moveIt(count, e) {
    e = e || window.event;
    var keycode = e.keyCode || e.which;
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}

function alert(txt) {
    console.log(txt);
}




