const form = document.querySelector('form')
const array = ['Name', 'Email', 'Phone']
for(let i = 0; i< 3; i++){
    const label = document.createElement('label')
    const input = document.createElement('input')
    label.innerText = array[i]
    input.type = 'text'
    input.name = array[i]
    input.id = array[i]
    input.required = true;
    form.appendChild(label)
    form.appendChild(input)
}




form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = {};
    array.forEach((element) => {
        const input = document.getElementById(element);
        console.log(input);
        formData[element] = input.value;
    })
    console.log(formData);
})