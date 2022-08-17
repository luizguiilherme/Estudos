import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Overley } from './styles';
import Spinner from '../Spinner';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overley>
      <Spinner size={90} />
    </Overley>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
