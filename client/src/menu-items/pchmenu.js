import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconReportAnalytics, IconHome, IconUsers } from '@tabler/icons';
import { FaFunnelDollar, FaHome, FaChartLine } from 'react-icons/fa';
import { MdDashboard, MdGroup } from 'react-icons/md';
import { RiFolderChartFill, RiTeamFill } from 'react-icons/ri';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconReportAnalytics,
    IconHome,
    IconUsers,
    FaFunnelDollar,
    MdDashboard,
    FaChartLine,
    FaHome,
    MdGroup,
    RiFolderChartFill
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
            url: '/dashboard',
            icon: icons.MdDashboard,
            breadcrumbs: false
        },
        {
            id: 'analytics',
            title: <FormattedMessage id="analytics" />,
            type: 'item',
            url: '/dashboard/analytics',
            icon: icons.FaChartLine,
            breadcrumbs: false
        },
        {
            id: 'leads',
            title: <FormattedMessage id="Leads" />,
            type: 'item',
            url: '/dashboard/leads',
            icon: icons.FaFunnelDollar,
            breadcrumbs: false
        },
        {
            id: 'listings',
            title: <FormattedMessage id="Listings" />,
            type: 'item',
            url: '/dashboard/listings',
            icon: icons.FaHome,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: <FormattedMessage id="Clients" />,
            type: 'item',
            url: '/dashboard/clients',
            icon: icons.MdGroup,
            breadcrumbs: false
        },
        {
            id: 'reports',
            title: <FormattedMessage id="Reports" />,
            type: 'collapse',
            url: '/dashboard/reports',
            icon: icons.RiFolderChartFill,
            children: [
                {
                    id: 'main',
                    title: <FormattedMessage id="Main Reports" />,
                    type: 'item',
                    url: '/dashboard/reports/main',
                    breadcrumbs: false
                },
                {
                    id: 'sales',
                    title: <FormattedMessage id="Sales" />,
                    type: 'item',
                    url: '/dashboard/reports/sales',
                    breadcrumbs: false
                },
                {
                    id: 'leads',
                    title: <FormattedMessage id="Leads" />,
                    type: 'item',
                    url: '/dashboard/reports/leads',
                    breadcrumbs: false
                },
                {
                    id: 'loanOfficers',
                    title: <FormattedMessage id="Loan Officers" />,
                    type: 'item',
                    url: '/dashboard/reports/loanofficers',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default dashboard;
