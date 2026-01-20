document.addEventListener('DOMContentLoaded', () => {
    const productName = "Nugget Taggers"

    document.body.innerHTML = document.body.innerHTML.replaceAll("Nugget Projects", productName)

    const links = document.querySelectorAll('[data-section]')
    const sections = document.querySelectorAll('.page-section')

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const targetSection = link.getAttribute('data-section')

            const currentActive = document.querySelector('.page-section.active')
            currentActive.style.opacity = '0'
            currentActive.style.transform = 'translateY(-20px)'

            setTimeout(() => {
                sections.forEach(section => {
                    section.classList.remove('active')
                    section.style.display = 'none'
                })

                const newSection = document.getElementById(targetSection)
                newSection.style.display = 'flex'
                newSection.offsetHeight
                newSection.classList.add('active')
                newSection.style.opacity = '1'
                newSection.style.transform = 'translateY(0)'

                links.forEach(l => l.classList.remove('active'))
                link.classList.add('active')
            }, 400)
        })
    })
})
