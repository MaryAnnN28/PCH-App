import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { FaCalculator } from 'react-icons/fa';

// constant
const icons = { FaCalculator };

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const tools = {
    id: 'tools',
    title: <FormattedMessage id="tools" />,
    type: 'group',
    children: [
        {
            id: 'calculators',
            title: <FormattedMessage id="Calculators" />,
            type: 'item',
            url: '/dashboard/calculators',
            icon: icons.FaCalculator
        }
    ]
};

export default tools;
