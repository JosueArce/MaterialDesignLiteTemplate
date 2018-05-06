import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-edit-component',
  templateUrl: '../../edit/edit.component.html',
})
export class EditComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<EditComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}