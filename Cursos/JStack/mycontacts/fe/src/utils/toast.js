import EventManeger from '../lib/EventManager';

export const toastEventManager = new EventManeger();

export default function toast({ type, text, duration }) {
  toastEventManager.emit('addtoast', { type, text, duration });
}
