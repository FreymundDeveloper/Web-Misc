type ComponentBase = {
    new(...args: any[]): {
        render(): any
    }
}

export default function logRender<C extends ComponentBase>(component: C) {
    return class extends component {
        render() {
            console.log('Rendering...')
            const r: any = super.render()
            console.log('Rendered!')
            return r
        }
    }
}