export abstract class View<Type> {

  protected elemento: HTMLElement
  private escapar = false
  
  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor)
    if (escapar) {
      this.escapar = escapar
    }
  }

  public update(model: Type): void {
    let template = this.template(model)
    if (this.escapar) {
      template = template
        .replace(/<script>[\s\S]*?<\/script>/, '')
    }
    this.elemento.innerHTML = template
  }

  protected abstract template(model: Type): string 
}