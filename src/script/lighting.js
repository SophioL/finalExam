const getUsers = async () => {
    try {
        const main = document.getElementById("main");
        const users = await fetch('./db/lighting.json')
        .then(_ => _.json())
        users.forEach(user => {
            const lightingEl = document.createElement('div');
            lightingEl.innerHTML = `
            <a href="./lighting2.html?${user.id}">
            <div class="wrapper">
                <div class="card">
                    <div class="top"><img src="${user.image}"></div>
                    <div class="bottom">
                        <div class="left">
                            <div class="details">
                                <h4>${user.name}</h4>
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
            lightingEl.addEventListener("click" , () => {
                localStorage.setItem("lightingId" , user.id)
                localStorage.setItem("lightingImg" , user.image)
                localStorage.setItem("lightingName" , user.name)
                localStorage.setItem("lightingText" , user.text)
                localStorage.setItem("lightingDes" , user.description)
                localStorage.setItem("lightingIncl" , user.includes)
                localStorage.setItem("lightingPrice" , user.price)
            })

            main.appendChild(lightingEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();