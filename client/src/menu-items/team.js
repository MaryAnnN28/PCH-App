import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUsers, IconFiles, IconMessages } from '@tabler/icons';

// constant
const icons = { IconUsers, IconFiles, IconMessages };

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
            url: '/loan-officers',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'chat',
            title: <FormattedMessage id="Chat" />,
            type: 'item',
            url: '/chat',
            icon: icons.IconMessages,
            breadcrumbs: false
        }
    ]
};

export default team;
