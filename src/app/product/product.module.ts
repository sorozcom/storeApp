import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';

@NgModule({
  declarations: [ProductListComponent, ProductCreatorComponent, ProductEditorComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
