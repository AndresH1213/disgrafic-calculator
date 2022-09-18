import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-modal-admin-product',
  templateUrl: './modal-admin-product.component.html',
  styleUrls: ['./modal-admin-product.component.css'],
})
export class ModalAdminProductComponent implements OnInit {
  @Input('product') selectedProduct: Product | undefined;
  @Input() isEdit: boolean = false;
  @Input() displayModal = false;

  @Output() isDisplayed: EventEmitter<boolean> = new EventEmitter();
  @Output() loadJobs: EventEmitter<boolean> = new EventEmitter();

  public showError: boolean = false;

  formProducts: FormGroup = this.fb.group({
    name: ['', Validators.required],
    label: ['', [Validators.required, Validators.minLength(4)]],
    image: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.isDisplayed.emit(true);
    if (this.isEdit) {
      this.editSetup();
    }
  }

  editSetup() {
    this.formProducts.setValue({
      name: this.selectedProduct?.name,
      label: this.selectedProduct?.label,
      image: this.selectedProduct?.image_url,
    });
  }

  createJob() {
    if (this.formProducts.invalid) {
      this.showError = true;
      return;
    }
  }

  updateJob() {
    if (this.formProducts.invalid) {
      this.showError = true;
      return;
    }
  }

  updateCreateJob() {
    if (this.isEdit) {
      this.updateJob();
    } else {
      this.createJob();
    }
  }

  closeModal() {
    this.displayModal = false;
    this.isDisplayed.emit(false);
  }
}
