/**
 * File: has-role.directive.ts
 * File Created: 02/05/2018
 * Author: annguyen
 * Description: Structural directive to display controls according to user role. 
 * Reference: https://angular.io/guide/structural-directives#unless
 */

import { Directive, Input, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Directive({
    selector: '[appHasRole]'
})
export class HasRoleDirective {
    private hasView:boolean = false;

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, 
        private authService: AuthService) { 
            console.log("Enter Directive");
        }

    @Input() set appHasRole(role: string) {
        if (this.authService.currentUser && this.authService.currentUser.role === role && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
