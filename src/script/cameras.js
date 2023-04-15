const getUsers = async () => {
    try {
        const main = document.getElementById("main");
        const users = await fetch('./db/cameras.json')
        .then(_ => _.json())
        users.forEach(user => {
            const cameraEl = document.createElement('div');
            //cameraEl.classList.add("")
            cameraEl.innerHTML = `
                <div class="container  mt-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${user.image}" class="card-img-top" alt="Arri mini LF">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.text}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${user.sensor_size}</li>
                        <li class="list-group-item">${user.max_resolution}</li>
                        <li class="list-group-item">${user.price}</li>
                    </ul>
                    <div class="card-body">
                        <button class="card-link"><img src=./src/images/cart4.svg>&nbsp<small>Price Request</small></button
                    </div>
                    </div>
                </div>

            `
            main.appendChild(cameraEl);
        });
    } catch (error) {
        console.log(error)
    }
}

getUsers();