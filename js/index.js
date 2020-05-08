const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : `123 Way 456 Street <br> Somewhere, USA`,
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let nc = document.querySelectorAll('nav a');
nc[0].textContent = 'Services';
nc[1].textContent = 'Product';
nc[2].textContent = 'Vision';
nc[3].textContent = 'Features';
nc[4].textContent = 'About';
nc[5].textContent = 'Contact';

let invest = document.createElement('a');
invest.href="#"
invest.style = "color: green"
invest.textContent = "Investors"
const pE = document.querySelector('nav');
pE.append(invest);

let career = document.createElement('a');
career.href="#"
career.style = "color: green"
career.textContent = "Careers"
const pECareer = document.querySelector('nav');
pECareer.append(career);


Array.from(nc).map(a => a.style.color = "green")
// for (i = 0; i < nc.length; i++) {
//   nc[i].style.color= "green";
// }


let cta = document.querySelector('.cta');
cta.style.display = 'flex';
cta.style.justifyContent = "space-around";

let ctaT = document.querySelector('.cta-text');
ctaT.style.display = "flex";
ctaT.style.flexDirection = "column";

let h1 = document.querySelector('h1');
h1.innerHTML = `DOM <br> IS <br> AWESOME`;
h1.style.textAlign = "center";

let btn = document.querySelector('button');
btn.textContent = "Get Started";

let img1 = document.querySelector('#cta-img');
img1.setAttribute('src', siteContent.cta ["img-src"])

let mct = document.querySelectorAll('.main-content .top-content .text-content h4');
mct[0].textContent = siteContent['main-content']['features-h4']
mct[1].textContent = siteContent['main-content']['about-h4']

let mImg = document.getElementById("middle-img");
mImg.setAttribute('src', siteContent['main-content'] ['middle-img-src'])

let mctB = document.querySelectorAll('.main-content .bottom-content .text-content h4');
mctB[0].textContent = siteContent['main-content']['services-h4']
mctB[1].textContent = siteContent['main-content']['product-h4']
mctB[2].textContent = siteContent['main-content']['vision-h4']

let mainT = document.querySelectorAll('.main-content .top-content .text-content p');
mainT[0].textContent = siteContent['main-content']['features-content']
mainT[1].textContent = siteContent['main-content']['about-content']


let mainB = document.querySelectorAll('.main-content .bottom-content .text-content p');
mainB[0].textContent = siteContent['main-content']['services-content']
mainB[1].textContent = siteContent['main-content']['product-content']
mainB[2].textContent = siteContent['main-content']['vision-content']


let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent.contact ['contact-h4']

let contactP = document.querySelectorAll('.contact p')
contactP[0].innerHTML = siteContent.contact ['address']
contactP[1].textContent = siteContent.contact ['phone']
contactP[2].textContent = siteContent.contact ['email']

let foot = document.querySelector('footer p')
foot.textContent = siteContent.footer['copyright']