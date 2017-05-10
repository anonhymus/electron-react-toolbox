/**
 * Created by Antoine Bouchard on 2017-05-10.
 */

import React from 'react';
import theme from './modal.css';
import {Dialog} from 'react-toolbox/lib/dialog';

const Modal = ({children, ...other}) =>
    (<Dialog
            {...other}
            theme={theme}>
          {children}
        </Dialog>
    );

export default Modal;