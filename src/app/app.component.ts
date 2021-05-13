import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Computers', url: '/computers', icon: 'desktop' },
    { title: 'Laptop', url: '/laptop', icon: 'laptop' },
    { title: 'Computers Part', url: '/parts', icon: 'save' },
    { title: 'Printers', url: '/printer', icon: 'print' },
    { title: 'Printers Part', url: '/printer-parts', icon: 'wifi' },
    { title: 'Xerox Material', url: '/xerox', icon: 'copy' },
    { title: 'Photography Material', url: '/photgraphy', icon: 'camera' },
    { title: 'Vinay\'s Services', url: '/services', icon: 'settings' },
    { title: 'Contact Us', url: '/contact', icon: 'mail' },
  ];
  public labels = [];
  constructor() { }
}
