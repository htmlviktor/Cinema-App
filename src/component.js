import { createElement } from "./create-element";
class Component {
    constructor(data) {
        if(new.target === Component) {
            throw new Error('Создавать экземляр нельзя, только наследовать')
        }

        this._element = null;
        this._onAction = null;
    }
    get template() {
        throw new Error('Обязательный метод для наследования')
    }
    bind() {}
    render() {
        this._element = createElement(this.template);
        this.bind();
        return this._element;
    }
    set onAction(fn) {
        this._onAction = fn;
    }

}

export {Component}