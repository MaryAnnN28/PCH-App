import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconFiles, IconMessages } from '@tabler/icons';
import { RiTeamFill, RiChat4Fill } from 'react-icons/ri';

// constant
const icons = { RiTeamFill, RiChat4Fill, IconFiles, IconMessages };

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const team = {
    id: 'team',
    title: <FormattedMessage id="team" />,
    type: 'group',
    children: [
        {
            id: 'loanOfficers',
            title: <FormattedMessage id="Loan Officers" />,
            type: 'item',
            url: '/team',
            icon: icons.RiTeamFill,
            breadcrumbs: false
        },
        {
            id: 'chat',
            title: <FormattedMessage id="Chat" />,
            type: 'item',
            url: '/chat',
            icon: icons.RiChat4Fill,
            breadcrumbs: false
        }
    ]
};

export default team;
