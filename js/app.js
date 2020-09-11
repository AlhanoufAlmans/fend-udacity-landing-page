const NavE = document.querySelectorAll('section');   //for observer
const List = document.getElementById('navbar__list');
//const ListM = document.getElementById('navbar__menu');  //to append 'const List' with

NavE.forEach(el => {              //for creating vabar elements and placement
        var navElement = `<li class='menu__link ${el.className}' data-link=${el.id}><a href="#${el.id}">${el.dataset.nav}</li>`;
        List.insertAdjacentHTML('afterbegin', navElement);
      })


      const callback = IN => {  //for dictating 
         IN.forEach(inn => {
           const navListElement = document.querySelector(
             `.menu__link[data-link='${inn.target.id}']`,
           )
           if (inn.isIntersecting) {
             navListElement.classList.add('active');
             //setTimeout(List.remove(), 10000000);
           } else 
           if (navListElement.classList.contains('active')) {
               navListElement.classList.remove('active')
             }
        })
      }

       


      const VIEW= {
        rootMargin: '0px',
        threshold: 0.6,
      }

      const obs= new IntersectionObserver(callback, VIEW)

      NavE.forEach(el => {
        obs.observe(document.getElementById(el.id))
      })
