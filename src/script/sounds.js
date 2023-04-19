const getUsers = async () => {
    try {
        const main = document.getElementById("main");
        const users = await fetch('./db/sounds.json')
        .then(_ => _.json())
        users.forEach(user => {
            const soundsEl = document.createElement('div');
            soundsEl.innerHTML = `
            <a href="./sound.html?${user.id}">
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
            soundsEl.addEventListener("click" , () => {
                localStorage.setItem("soundId" , user.id)
                localStorage.setItem("soundImg" , user.image)
                localStorage.setItem("soundName" , user.name)
                localStorage.setItem("soundText" , user.text)
                localStorage.setItem("soundDes" , user.description)
                localStorage.setItem("soundIncl" , user.includes)
                localStorage.setItem("soundPrice" , user.price)
            })

            main.appendChild(soundsEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();