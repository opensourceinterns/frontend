import React from 'react';

const forwardProps = (component, props) => {
	return React.cloneElement(component, props);
}

export default forwardProps;