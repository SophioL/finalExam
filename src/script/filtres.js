const getUsers = async () => {
    try {
        const main = document.getElementById("main");
        const users = await fetch('./db/filtres.json')
        .then(_ => _.json())
        users.forEach(user => {
            const filtresEl = document.createElement('div');
            filtresEl.innerHTML = `
            <a href="./filtre.html?${user.id}">
            <div class="container">
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
            </div>
            </a>

            `
            filtresEl.addEventListener("click" , () => {
                localStorage.setItem("filtreId" , user.id)
                localStorage.setItem("filtreImg" , user.image)
                localStorage.setItem("filtreName" , user.name)
                localStorage.setItem("filtreText" , user.text)
                localStorage.setItem("filtreDes" , user.description)
                localStorage.setItem("filtreIncl" , user.includes)
                localStorage.setItem("filtrePrice" , user.price)
            })

            main.appendChild(filtresEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();