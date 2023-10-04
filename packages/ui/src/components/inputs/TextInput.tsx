import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import './TextInput.scss';

type Props = {
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
	containerClass?: string;
	inputClass?: string;
};

export default function TextInput({ inputProps, labelProps, containerClass = '', inputClass = '' }: Props) {
	return (
		<label className={`text-input__label ${containerClass}`} {...labelProps}>
			<input className={`text-input__input ${inputClass}`} {...inputProps} />
		</label>
	);
}
