let demo = document.getElementById("demo");
fetch("http://localhost:3000/wanted_poster")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.slice(0, 8).forEach((item) => {
      demo.innerHTML += `
        <img src="image/${item.image}"alt="" width="150px" height="170px" >
            `;
    });
  });
