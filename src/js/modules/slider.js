export default class Slider {
    constructor(page, btns){
        this.page = document.querySelector(page);
        this.sider = this.page.children;
        this.btns = document.querySelectorAll(btns);
    }

    render() {
        console.log(this.page, this.slides);
    }
}