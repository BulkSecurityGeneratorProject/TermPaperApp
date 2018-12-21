import { NgModule } from '@angular/core';

import { TermPaperSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TermPaperSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TermPaperSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TermPaperSharedCommonModule {}
