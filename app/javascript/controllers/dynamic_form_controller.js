import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['refresh']

  connect() {
    this.originalTarget = this.element.getAttribute('target')
  }

  submit () {
    this.element.removeAttribute('target')
    this.refreshTarget.click()
    this.element.setAttribute('target', this.originalTarget)
  }
}
