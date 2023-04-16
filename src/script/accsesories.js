const getUsers = async () => {
    try {
        const main2 = document.getElementById("main2");
        const users = await fetch('./db/accssesories.json')
        .then(_ => _.json())
        users.forEach(user => {
            const accssesoriesEl = document.createElement('div');
            //accssesoriesEl.classList.add("")
            accssesoriesEl.innerHTML = `
            <a href="./accssesories.html?${user.id}">
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
            accssesoriesEl.addEventListener("click" , () => {
                localStorage.setItem("accssesoriesId" , user.id)
                localStorage.setItem("accssesoriesImg", user.image)
                localStorage.setItem("accssesoriesName",user.name)
                localStorage.setItem("accssesoriesText",user.text)
                localStorage.setItem("accssesoriesDes",user.sensor_size)
                localStorage.setItem("accssesoriesIncl",user.max_resolution)
                localStorage.setItem("accssesoriesPrice",user.price)
            })

            main2.appendChild(accssesoriesEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();