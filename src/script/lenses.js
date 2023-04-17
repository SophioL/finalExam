const getUsers = async () => {
    try {
        const main = document.getElementById("main");
        const users = await fetch('./db/lenses.json')
        .then(_ => _.json())
        users.forEach(user => {
            const lenseEl = document.createElement('div');
            lenseEl.innerHTML = `
            <a href="./lense.html?${user.id}">
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
            lenseEl.addEventListener("click" , () => {
                localStorage.setItem("lenseId" , user.id)
                localStorage.setItem("lenseImg", user.image)
                localStorage.setItem("lenseName",user.name)
                localStorage.setItem("lenseText",user.text)
                localStorage.setItem("lenseDes",user.description)
                localStorage.setItem("lenseIncl",user.includes)
                localStorage.setItem("lensePrice",user.price)
            })

            main.appendChild(lenseEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();
