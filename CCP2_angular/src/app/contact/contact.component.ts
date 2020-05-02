import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';
import Contact from '../Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact[];
  constructor(private ms: ContactService) { }
  deleteContact(id: any, index: number) {
    this.ms.deleteContact(id).subscribe(res => {
      this.contact.splice(index, 1);
    });
  }
  ngOnInit() {
    this.ms
      .getContact()
      .subscribe((data: Contact[]) => {
        this.contact = data;
      });
  }

}
