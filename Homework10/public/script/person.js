import Component from './component.js';
import PopupList from './popupList.js';


export default class Person extends Component{
    render({person}){
        return `<div class="person-card">
            <img class="person-card__image" src="${person.image}" alt="Фото ${person.name}">
            <p class="person-card__name" title="${person.name}">${person.name}</p>
            <span class="person-card__info">${person.education}</span>
        </div>`
    }

    afterMount() {
        this.container.addEventListener('click', (event) => this.click(event) );
    }
  
    click(event) {
        if (!this.popup) {
            this.popup = new PopupList();
            this.popup.mount(document.body);
        }
        this.popup.open('student', {
           title: this.options.person.name,
           content: `<center><img height="300" width="300" class="card__img" src="${this.options.person.image || 'img/ui/default_pix.jpg'}" alt="Аватар ${this.title}"></center>`
        });
    }
}