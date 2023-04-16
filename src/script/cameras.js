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
                <div class="container  mt-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${user.image}" class="card-img-top" alt="Arri mini LF">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.text}</p>
                    </div>
                    <div class="card-body">
                        <button class="card-link"><img src=./src/images/cart4.svg>&nbsp<small>Price Request</small></button
                    </div>
                    </div>
                </div>
            </a>

            `
            cameraEl.addEventListener("click" , () => {
                localStorage.setItem("cameraId" , user.id)
                localStorage.setItem("cameraImg", user.image)
                localStorage.setItem("cameraName",user.name)
                localStorage.setItem("cameraText",user.text)
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

