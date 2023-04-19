const getUsers = async () => {
    try {
        const main = document.getElementById("main");
        const users = await fetch('./db/accssesories.json')
        .then(_ => _.json())
        users.forEach(user => {
            const accssesoriesEl = document.createElement('div');
            accssesoriesEl.innerHTML = `
            <a href="./accssesorie.html?${user.id}">
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
            accssesoriesEl.addEventListener("click" , () => {
                localStorage.setItem("accssesorieId" , user.id)
                localStorage.setItem("accssesorieImg" , user.image)
                localStorage.setItem("accssesorieName" , user.name)
                localStorage.setItem("accssesorieText" , user.text)
                localStorage.setItem("accssesorieDes" , user.description)
                localStorage.setItem("accssesorieIncl" , user.includes)
                localStorage.setItem("accssesoriePrice" , user.price)
            })

            main.appendChild(accssesoriesEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();