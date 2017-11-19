"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("./dashboard/dashboard.component");
var user_component_1 = require("./user/user.component");
var table_component_1 = require("./table/table.component");
var typography_component_1 = require("./typography/typography.component");
var icons_component_1 = require("./icons/icons.component");
var maps_component_1 = require("./maps/maps.component");
var notifications_component_1 = require("./notifications/notifications.component");
var upgrade_component_1 = require("./upgrade/upgrade.component");
var blood_preasure_component_1 = require("./user/blood-preasure/blood-preasure.component");
exports.AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: 'user/bloodPreasure',
        component: blood_preasure_component_1.BloodPreasureComponent
    },
    {
        path: 'table',
        component: table_component_1.TableComponent
    },
    {
        path: 'typography',
        component: typography_component_1.TypographyComponent
    },
    {
        path: 'icons',
        component: icons_component_1.IconsComponent
    },
    {
        path: 'maps',
        component: maps_component_1.MapsComponent
    },
    {
        path: 'notifications',
        component: notifications_component_1.NotificationsComponent
    },
    {
        path: 'upgrade',
        component: upgrade_component_1.UpgradeComponent
    }
];
//# sourceMappingURL=app.routing.js.map