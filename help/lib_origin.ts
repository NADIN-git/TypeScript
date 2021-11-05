export function renderBlock (elementId: string, html: string): void {    
  //document.getElementById('messages').append(document.createElement('br'));
  const element = document.getElementById(elementId)
  element.innerHTML = html
  //document.getElementById(elementId).append(document.createElement('br'));
  //  };
  //document.getElementById('messages').append(document.createElement('br'));
  //element.innerHTML = html

  //const msgSpan = document.createElement('span').innerHTML = html;
  //document.getElementById('messages').append(msgSpan);

  //const addMessage = (msg) => {
  //      const msgSpan = document.createElement('span').innerHTML = msg;
  //      document.getElementById('messages').append(msgSpan);
  //document.getElementById('messages').append(document.createElement('br'));
  //  };
}

export interface RenderMessage {
    text: string;
    type: string;
  }
  
export interface RenderAction {
    handler: () => void;
    name: string;
  }
  
  
export function renderToast (message?: RenderMessage, action?: RenderAction): void {
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
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast()
    }
  }
}