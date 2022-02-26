import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['refresh']

  submit () {
    this.refreshTarget.click()
  }
}
