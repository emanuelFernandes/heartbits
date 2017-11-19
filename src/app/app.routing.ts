import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { BloodPreasureComponent } from './user/blood-preasure/blood-preasure.component';
import { MedicationComponent } from './user/medication/medication.component';
import { MedicationListComponent } from './user/medication-list/medication-list.component';
import { GlucoseComponent } from './user/glucose/glucose.component';
import { NotesComponent } from './user/notes/notes.component';
import { ReportComponent } from './user/report/report.component';



export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'user/bloodPreasure',
        component: BloodPreasureComponent
    },
    {
        path: 'user/medication',
        component: MedicationComponent
    },
    {
        path: 'user/medication-list',
        component: MedicationListComponent
    },
    {
        path: 'user/glucose',
        component: GlucoseComponent
    },
    {
        path: 'user/report',
        component: ReportComponent
    },
    {
        path: 'user/notes',
        component: NotesComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
