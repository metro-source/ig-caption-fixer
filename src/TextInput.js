import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import "./TextInput.css";

export default function TextInput() {
    const intl = useIntl();
    const [text, setText] = useState(intl.formatMessage({ id: 'inputPlaceholder' }));

    let transform = (srcText) => srcText.replace(/\n/g, '\n\u2063\n');

    return (
    <div className='TextInputContainer'>
        <div className='TextInput'>
            <div className='TextInput--title'><FormattedMessage id='srcTextTitle' /></div>
            <textarea defaultValue={text} onChange={e => setText(transform(e.target.value)) }></textarea>
        </div>

        <div className='TextInput'>
            <div className='TextInput--title'><FormattedMessage id='fixedTextTitle' /></div>
            <textarea onClick={({target}) => target.select()} type='text' value={text} contentEditable={false} readOnly={true} />
        </div>
    </div>
    )
}