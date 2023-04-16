const getUsers = async () => {
    try {
        const main1 = document.getElementById("main1");
        const users = await fetch('./db/lenses.json')
        .then(_ => _.json())
        users.forEach(user => {
            const lenseEl = document.createElement('div');
            //cameraEl.classList.add("")
            lenseEl.innerHTML = `
            <a href="./lense.html?${user.id}">
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
            lenseEl.addEventListener("click" , () => {
                localStorage.setItem("lenseId" , user.id)
                localStorage.setItem("lenseImg", user.image)
                localStorage.setItem("lenseName",user.name)
                localStorage.setItem("lenseText",user.text)
                localStorage.setItem("lenseDes",user.description)
                localStorage.setItem("lenseIncl",user.includes)
                localStorage.setItem("lensePrice",user.price)
            })

            main1.appendChild(lenseEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();
