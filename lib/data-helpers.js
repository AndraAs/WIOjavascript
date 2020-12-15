module.exports = {
    getRandomName: function() {
        let randomNumber = Math.floor(Math.random() * 100 +1)
        return `name${new Date().getTime().toString()}${randomNumber}}`
    },
    getRandomId: function() {
        let randomNuber=Math.floor(Math.random() *100 +1)
        return `Id_${new Date().getTime().toString()}${randomNuber }`
    }, getRandomPhoneNumber: function() {
        return Math.random().toString().slice(2,11)
    },
    getRandomEmail: function() {
        return `${new Date().getTime().toString()}${'@email.com'}`
    },
}