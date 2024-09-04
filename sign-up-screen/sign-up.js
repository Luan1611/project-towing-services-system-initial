
const form = document.querySelector('form');
const phoneAddButton = document.querySelector('#phone-add-bt')
let phoneNameCounter = 2

phoneAddButton.addEventListener('click', event => {

    const bt = event.target

    const newInputPhoneNumber = document.createElement('input')
    newInputPhoneNumber.setAttribute('type', "text")
    newInputPhoneNumber.setAttribute('name', `user-phone-${phoneNameCounter}`)
    newInputPhoneNumber.setAttribute('placeholder', "Telefone")

    bt.insertAdjacentElement('beforebegin', newInputPhoneNumber)

    ++phoneNameCounter

})

form.addEventListener('submit', event => {

    event.preventDefault()

    

    console.log(event.target)

})