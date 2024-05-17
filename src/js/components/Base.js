//  Windows UI basic component class
class BaseComponent {
    constructor() {
        this.children = [];
        this.element = document.createElement('div');
    }

    appendChild(child) {
        this.children.push(child);
        this.element.appendChild(child.element);
    }

    setProperty(propName, value) {
        // Simple property system
        this[propName] = value;
        this.updateStyle();
    }

    updateStyle() {
        // Update styles based on properties
    }

    addEventListener(event, handler) {
        this.element.addEventListener(event, handler);
    }
}

// Extending the BaseComponent to create a specific Widget type
class MyWidget extends BaseComponent {
    constructor() {
        super();
        this.setProperty('backgroundColor', 'white');
        this.addEventListener('click', this.onClick.bind(this));
    }

    onClick(event) {
        console.log('Widget clicked!', event);
    }

    updateStyle() {
        super.updateStyle();
        this.element.style.backgroundColor = this.backgroundColor;
    }
}
