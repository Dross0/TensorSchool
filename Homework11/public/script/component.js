
export default class Component{

    constructor(options){
        this.options = options;
        this.container = undefined;
    }

    render(){
        return '<div></div>';
    }

    mount(container, position){
        this.beforeMount();

        let comp = document.createElement('div');
        comp.innerHTML = this.render(this.options);
        this.container = comp.firstElementChild;
        container.insertAdjacentElement(position || 'beforeend', this.container);
        comp.remove()

        this.afterMount();
    }

    unmount(){
        this.beforeUnmount();

        if (this.container){
            this.container.remove();
            this.container = undefined;
        }

        this.afterUnmount();
    }

    beforeMount(){}

    afterMount(){}

    beforeUnmount(){}

    afterUnmount(){}
} 

