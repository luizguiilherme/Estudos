export default class EventManeger {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listerners = this.listeners[event];

    if (!listerners) {
      return;
    }

    const filteredListeners = listerners.filter(
      (listener) => listener !== listenerToRemove,

    );

    this.listerners[event] = filteredListeners;
  }
}

const toastEventManeger = new EventManeger();

function addToast1(payload) {
  console.log('addtoast listener1', payload);
}
function addToast2(payload) {
  console.log('addtoast listener2', payload);
}

toastEventManeger.on('addtoast', addToast1);
toastEventManeger.on('addtoast', addToast2);
toastEventManeger.emit('addtoast', { type: 'danger', text: 'Texto' });

toastEventManeger.removeListener('addtoast', addToast1);
toastEventManeger.emit('addtoast', 'depois de remover');

console.log(toastEventManeger);
