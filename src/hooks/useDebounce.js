import { useEffect, useState } from 'react';

function useBounce(value, delay) {
    const [_value, _setValue] = useState(value);
    useEffect(() => {
        const _timeId = setTimeout(() => _setValue(value), delay);
        return () => clearTimeout(_timeId);
    }, [value]);
    return _value;
}

export default useBounce;
