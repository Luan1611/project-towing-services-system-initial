const userCardDiv = document.querySelector('.user-card')

const userEmail = localStorage.getItem('email')
const userPassword = localStorage.getItem('password')
const userName = localStorage.getItem('username')
const userCPF = localStorage.getItem('usercpf')
const userCEP = localStorage.getItem('usercep')
const userNeighborhood = localStorage.getItem('userneighborhood')
const userUF = localStorage.getItem('useruf')
const userCity = localStorage.getItem('usercity')
const userAdressNumber = localStorage.getItem('useradressnumber')

const userDataTemplate = `
<h3>${userName}</h3>
<p>E-mail: ${userEmail}</p>
<p>CPF: ${userCPF}</p>
<p>Bairro: ${userNeighborhood}</p>
<p>Estado: ${userUF}</p>
<p>Cidade: ${userCity}</p>
<p>Número: ${userAdressNumber}</p>
<p>CEP: ${userCEP}</p>
`

userCardDiv.append(userDataTemplate)