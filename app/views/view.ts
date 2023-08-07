export abstract class View<Type> {

  protected elemento: HTMLElement
  
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }

  public update(model: Type): void {
    const template = this.template(model)
    this.elemento.innerHTML = template
  }

  protected abstract template(model: Type): string 
}