const formItems = document.querySelector(`#formItems`)
const content = document.querySelector(`#content`)
const productList = document.querySelector(`#productsList`)

formItems.addEventListener('submit', (e)=> {
    e.preventDefault()
    const amount = e.target.amount.value
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild)
    }
    e.target.amount.value = ''
    fetch(`https://fakestoreapi.com/products?limit=${amount}`)
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            content.style.display = 'block'
            data.map(item => {
                const itemCard = document.createElement('section')
                const itemTitle = document.createElement('section')
                itemTitle.textContent = item.title
                const desc = document.createElement(`p`)
                desc.textContent = item.description
                const img = document.createElement(`img`)
                img.src = item.image
                img.classList.add(`cardImage`)
                itemCard.append(itemTitle, desc, img)
                productList.append(itemCard)
            })
        })
})