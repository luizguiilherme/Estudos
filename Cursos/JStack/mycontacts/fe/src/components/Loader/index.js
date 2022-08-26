import PropTypes from 'prop-types';

import { Overley } from './styles';
import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overley>
        <Spinner size={90} />
      </Overley>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
