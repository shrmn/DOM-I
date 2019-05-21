const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navLinks = document.querySelectorAll("nav a");

let navLinkKeys = Object.keys(siteContent.nav).filter(key => {
  if (key.includes("nav")) {
    return key;
  }
});

navLinks.forEach((link, index) => {
  link.textContent = siteContent["nav"][navLinkKeys[index]];
});

let ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent.cta.h1;

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta.button;

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

let subHeadings = document.querySelectorAll("h4");
let subHeadingsKeys = Object.keys(siteContent["main-content"]).filter(key => {
  if (key.includes("h4")) {
    return key;
  }
});
console.log(`subheading keys; `, subHeadingsKeys);
subHeadings.forEach((heading, index) => {
  heading.textContent = siteContent["main-content"][subHeadingsKeys[index]];
  console.log(heading.textContent);
});

let mainContent = document.querySelectorAll("p");
let mainContentKeys = Object.keys(siteContent["main-content"]).filter(keys => {
  if (keys.includes("content")) {
    return keys;
  }
});
mainContent.forEach((p, index) => {
  p.textContent = siteContent["main-content"][mainContentKeys[index]];
});

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent.contact["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p");
let contactInfoKeys = Object.keys(siteContent.contact);
contactInfo.forEach((item, index) => {
  item.textContent = siteContent.contact[contactInfoKeys[index + 1]];
});

let copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer.copyright;

let navBar = document.querySelector("nav");

let aNewNavLink = document.createElement("a");
aNewNavLink.textContent = "Whoa";

navBar.prepend(aNewNavLink);

let anotherNewNavLink = document.createElement("a");
anotherNewNavLink.textContent = "Baby!";

navBar.append(anotherNewNavLink);
