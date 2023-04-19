const getUsers = async () => {
    try {
        const main = document.getElementById("main");
        const users = await fetch('./db/cameras.json')
        .then(_ => _.json())
        users.forEach(user => {
            const cameraEl = document.createElement('div');
            //cameraEl.classList.add("")
            cameraEl.innerHTML = `
            <a href="./camera.html?${user.id}">          
              <div class="wrapper">
                    <div class="card">
                      <div class="top"><img src="${user.image}"></div>
                      <div class="bottom">
                          <div class="left">
                                <div class="details">
                                  <h4><strong>${user.name}</strong></h4>
                                  <p>${user.price}</p>
                                </div>
                                <div class="buy"><img src="./src/images/cart4.svg"></div>
                          </div>
                      </div>
                    </div>
                    <div class="inside">
                      <div class="text">
                        <h5>${user.text}</h5>
                      </div>
                    </div>
              </div>
            </a>

            `
            cameraEl.addEventListener("click" , () => {
                localStorage.setItem("cameraId" , user.id)
                localStorage.setItem("cameraImg", user.image)
                localStorage.setItem("cameraName",user.name)
                localStorage.setItem("cameraDes",user.description)
                localStorage.setItem("cameraSensor",user.sensor_size)
                localStorage.setItem("cameraMax",user.max_resolution)
                localStorage.setItem("cameraPrice",user.price)
            })

            main.appendChild(cameraEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();

