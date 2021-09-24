import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUsers, IconFiles, IconMessages, IconCalculator } from '@tabler/icons';

// constant
const icons = { IconUsers, IconFiles, IconMessages, IconCalculator };

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const tools = {
    id: 'tools',
    title: <FormattedMessage id="tools" />,
    type: 'group',
    children: [
        {
            id: 'calculators',
            title: <FormattedMessage id="Calculators" />,
            type: 'collapse',
            url: '/tools/calculators',
            icon: icons.IconCalculator,
            children: [
                {
                    id: 'sales',
                    title: <FormattedMessage id="Sales" />,
                    type: 'item',
                    url: '/reports/sales-report',
                    breadcrumbs: false
                },
                {
                    id: 'leads',
                    title: <FormattedMessage id="Leads" />,
                    type: 'item',
                    url: '/reports/leads-report',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default tools;
