import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Input({ label, ...props }) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(PropTypes || 'text');

  useEffect(() => {
    if (show) {
      setType('text');
    } else if(PropTypes==='password') {
      setType('password');
    }
  }, [show]);

  return (
    <label className="block relative">
      <input
        required={true}
        type={type}
        className="bg-zinc-50 text-xs border w-full h-[38px] px-2 outline-none focus:border-gray-400 valid:pt-3 peer"
        {...props}
      />
      <small className="absolute cursor-text pointer-event-none rounded-sm text-gray-500 top-1/2 text-xs left-2 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {PropTypes === 'password' && PropTypes.value && (
        <button
          type="button"
          onClick={() => setShow((show) => !show)}
          className="absolute top-0 right-0 h-full flex items-center"
        >
          {show ? 'Hide' : 'Show'}
        </button>
      )}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  // Diğer propType tanımlamaları
};
