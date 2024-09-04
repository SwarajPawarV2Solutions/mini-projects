const URI = "https://api.npoint.io/20c1afef1661881ddc9c";
const btn = document.getElementById("btn");
const card = document.querySelector(".main");

// Fetch Api = The fetch Api provides an interface for fetching(Sending/Receiving) resources.
// It uses Request and Response Objects.
// The fetch() method is used to fetch a resource (data)
//let promise = fetch(url,[options])

// We will take data by async await

btn.addEventListener("click", async () => {
  const data = fetch(URI, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    const data = await res.json(); // we use await becz json is also Asynchronous method. We use this to make it readable.

    // Printing Cards using Loop. we have added template for player data.

    alert(" Just a moment, fetching the latest player info for you ! ");

    data.teamsList.forEach((item, i) => {
      card.innerHTML += `
                <div class="items">
                    <div class="head">${data.playerList[i].Id}</div>
                    <h3>player name</h3>
                     <h1>${data.playerList[i].PFName}</h1>
                    <div class="summary"> 
                        <div> 
                            <h1>${data.playerList[i].Skill}</h1>
                            <h4>skills</h4>
                        </div>
                        <div class="c">
                            <h2>${
                              data.playerList[i].IsActive == 1
                                ? "ACTIVE"
                                : "INACTIVE"
                            } </h2>
                            <h4>${data.playerList[i].TName}</h4>
                        </div>
                    </div>
                    <h5>plays • ${data.playerList[i].SkillDesc}</h5>
                </div>`;
    });
  });
});

// AJAX is Asynchronous Js & XML
// JSON is JavaScript Object Notation . json format is like a javascript object format. But it is not javaScript object.

// previously data format comes in XML  Format but now it comes in json Format.

/*
json() method : returns a Second promise that resolves with the result of parsing 
the response body text as JSON.(Input is JSON, output is JS object)
 */

// We get response in json so we need to convert it into javaScript object. To convert it we use json() method.
