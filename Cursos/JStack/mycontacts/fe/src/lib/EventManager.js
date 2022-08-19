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
}

const toastEventManeger = new EventManeger();

toastEventManeger.on('addtoast', (payload) => {
  console.log('addtoast listener1', payload);
});
toastEventManeger.on('addtoast', (payload) => {
  console.log('addtoast listener2', payload);
});

toastEventManeger.emit('addtoast', { type: 'danger', text: 'Texto' });

console.log(toastEventManeger);
