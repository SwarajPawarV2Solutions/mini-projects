let heading = [
  "Artificial Intelligence",
  "Data Science",
  "Development",
  "Blockchain",
];
let mbaHeading = [
  "Finance Management",
  "Human Resource Management",
  "Digital Marketing Management",
  "Entrepreneurship Management",
];
let mechHeading = [
  "Machine Design",
  "Thermal Engineering",
  "Automobile Engineering",
  "Robotics",
];
let chemHeading = [
  "Chemical Engineering",
  "Petrochemical Engineering",
  "Quality Engineering",
  "Biochemical Engineering",
];
let civilHeading = [
  "Structural Engineering",
  "Highway Engineering",
  "Transportation Engineering",
  "Water Engineering",
];

let blocks = [
  "IT COURSES",
  "MBA COURSES",
  "MECHANICAL COURSES",
  "CHEMICAL COURSES",
  "CIVIL COURSES",
];

function changePage(e) {
  window.localStorage.setItem("button-pressed", e);
  window.localStorage.setItem(
    "of-block",
    document.getElementById(e).parentElement.parentElement.parentElement
      .parentElement.id
  );
  // console.log(document.getElementById(e).parentElement.parentElement.parentElement.parentElement.id);
  window.location.replace("/it.html");
}

if (document.referrer.includes("index.html")) {
  let getItem = window.localStorage.getItem("button-pressed");
  let ofBlock = window.localStorage.getItem("of-block");
  let index = getItem.substring(4);
  let block = getItem.substring(3, 4);
  if (block == 0) {
    document.getElementById("sheading").innerText = heading[index];
    document.getElementById("lheading").innerText = blocks[block];
  } else if (block == 1) {
    document.getElementById("lheading").innerText = blocks[block];
    document.getElementById("sheading").innerText = mbaHeading[index];
  } else if (block == 2) {
    document.getElementById("lheading").innerText = blocks[block];
    document.getElementById("sheading").innerText = mechHeading[index];
  } else if (block == 3) {
    document.getElementById("lheading").innerText = blocks[block];
    document.getElementById("sheading").innerText = chemHeading[index];
  } else if (block == 4) {
    document.getElementById("lheading").innerText = blocks[block];
    document.getElementById("sheading").innerText = civilHeading[index];
  }
}

/// courses
let itLinks = [
  "https://www.youtube.com/embed/Cfa-WKBMqoo?si=qg0cJwt3vjgGBZ9s",
  "https://www.youtube.com/embed/tbc8zLcbW5Q?si=UV0uMs9vFfUH2kIn",
  "https://www.youtube.com/embed/uULy2rc6YDc?si=Au7GFLbuou2Zd3TL",
  "https://www.youtube.com/embed/C6YtPJxNULA?si=64SFK87nUhqLRQwU" ,
  "https://www.youtube.com/embed/1vsmaEfbnoE?si=8xJIZWkeJgYksneY",
  "https://www.youtube.com/embed/Q4p8vRQX8uY?si=nNnPQUwryUJ79aeR",
  "https://www.youtube.com/embed/_uGb1ek4zlU?si=hdOnrGwn4H6i4xke",
  "https://www.youtube.com/embed/-DzowlcaUmE?si=bdYIfgS5q_zIIFZ2",
  "https://www.youtube.com/embed/eIrMbAQSU34?si=k8Fey3zedVIQQn65", 

];

function toggleCourse(e) {
  window.localStorage.setItem("course", e);
  window.location.replace("/course.html");
}

if (document.referrer.includes("it.html")) {
  let key = window.localStorage.getItem("course");
  key = key.substring(3);
  console.log(key);
  document.getElementById("if").setAttribute("src", itLinks[key]);
}
