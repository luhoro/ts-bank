import { inspect } from "../decorators/inspect.js"
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js"

export abstract class View<Type> {

  protected elemento: HTMLElement

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor)
    if (elemento) {
      this.elemento = elemento as HTMLElement
    } else {
      throw Error(`Seletor ${seletor}, não existe no DOM`)
    }
  }

  public update(model: Type): void {
    let template = this.template(model)
    this.elemento.innerHTML = template
  }

  protected abstract template(model: Type): string
}
