export function renderBlock (elementId: string, html: string) {
  const element = document.getElementById(elementId)
  if(element){
    element.innerHTML = html
  }

}


export function renderBlock2 (elementId: string, html: string) {
  const element = document.getElementById(elementId)

  element?.insertAdjacentHTML('beforeend', html)
}

export type MessageToast = {
  text: string
  type: string
}
export type ActionToast = {
  name: string
  handler: Function
}

export type Maybe<T> = T | null


export function renderToast (message:Maybe<MessageToast> , action: Maybe<ActionToast>) {
  let messageText = ''

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }

  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, null)
    }
  }
}
