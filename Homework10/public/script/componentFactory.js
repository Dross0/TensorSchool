export default class ComponentFactory{
    static create(component, options){
        return new component(options || {});
    }
 }