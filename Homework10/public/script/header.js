import Component from './component.js'


export default class Header extends Component{
    render({title, description, logo}){
        return `<header>
            <div class='header'>
                <img src="${logo}" alt="${title}">
                <p class="header__title" title="${title}">${title}</p>
                <span class="header__description" title="${description}">${description}</span>
            </div>
        </header>`
    }
}
