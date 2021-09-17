const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  new WinBox({
    title: 'About Me',
    background: '#0037DA',
    width: '500px',
    height: '500px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#0037DA')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  new WinBox({
    title: 'Contact Me',
    background: '#0037DA',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#0037DA')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})