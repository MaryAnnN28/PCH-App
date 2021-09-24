import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconReportAnalytics, IconHome, IconUsers } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconReportAnalytics,
    IconHome,
    IconUsers
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id="dashboard" />,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="Dashboard" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'analytics',
            title: <FormattedMessage id="analytics" />,
            type: 'item',
            url: '/analytics',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        },
        {
            id: 'leads',
            title: <FormattedMessage id="Leads" />,
            type: 'item',
            url: '/leads',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'listings',
            title: <FormattedMessage id="Listings" />,
            type: 'item',
            url: '/listings',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: <FormattedMessage id="Clients" />,
            type: 'item',
            url: '/clients',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'reports',
            title: <FormattedMessage id="Reports" />,
            type: 'collapse',
            url: '/reports',
            icon: icons.IconReportAnalytics,
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

export default dashboard;
