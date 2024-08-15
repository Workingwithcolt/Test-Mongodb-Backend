const userObject = {
    name: "chetan",
    email: "mohitechetan2019@gmail.com",
    password: "123456",
    dob: "29/11/2001",
    address: "satara"
}

const AddData = async () => {
    try {
        const response = await fetch("http://localhost:3000/users/", {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return response
    } catch (e) {
        console.log(e)
    }
}

console.log(AddData())