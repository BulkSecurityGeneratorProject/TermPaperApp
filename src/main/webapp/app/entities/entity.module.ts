import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TermPaperRegionModule } from './region/region.module';
import { TermPaperCountryModule } from './country/country.module';
import { TermPaperLocationModule } from './location/location.module';
import { TermPaperDepartmentModule } from './department/department.module';
import { TermPaperTaskModule } from './task/task.module';
import { TermPaperEmployeeModule } from './employee/employee.module';
import { TermPaperJobModule } from './job/job.module';
import { TermPaperJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TermPaperRegionModule,
        TermPaperCountryModule,
        TermPaperLocationModule,
        TermPaperDepartmentModule,
        TermPaperTaskModule,
        TermPaperEmployeeModule,
        TermPaperJobModule,
        TermPaperJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TermPaperEntityModule {}
