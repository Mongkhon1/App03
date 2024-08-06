import { Component } from '@angular/core';
import { IonCheckbox, IonBadge, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButton, IonActionSheet, IonAlert } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ IonCheckbox, IonBadge, IonList, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonLabel, IonButton, IonActionSheet, IonAlert],
})
export class Tab1Page {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('ยกเลิก');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('สำเร็จ');
      },
    },
  ];

  public alertButtons1 = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
}
