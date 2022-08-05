import ReactDOM from 'react-dom';

import { Overley } from './styles';

export default function Loader() {
  return ReactDOM.createPortal(
    <Overley>
      <div className="loader" />
    </Overley>,
    document.getElementById('loader-root'),
  );
}
