import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3">

        <label className="form-label" htmlFor={props.name}>{props.title}</label>
            <input
            type={props.type}
            onChange={props.onChange}
            className={props.className}
            autoComplete={props.autoComplete}
            id={props.name}
            name={props.name}
            ref={ref}
            />
        </div>
    );
});
export default Input;
