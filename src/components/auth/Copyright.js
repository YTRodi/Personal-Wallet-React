import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Copyright = () => {
    return (
        <div>
            <Typography variant='body1' color='textSecondary' align='center'>
                { `Made with love ❤️ by Rodi Yago ${ new Date().getFullYear() }.` }
            </Typography>
        </div>
    )
}
