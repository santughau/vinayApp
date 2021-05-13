import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.page.html',
  styleUrls: ['./service-details.page.scss'],
})
export class ServiceDetailsPage implements OnInit {
  selectedId: number;

  comp = ['Technical Support', 'PC not turning on issues', 'Hard Disk Repair / Replacement', 'Software Corruption and Failure ', 'Software Corruption and Failure 2', 'Memory / Graphic Card Replacement', 'Motherboard Repair', 'PC up-gradation', 'System shutting down constantly', 'PC overheating', 'PC running slow', 'Installation & setup Software ,application', 'SMPS Repair / Replacement', 'Strange grinding like noise', 'Blue screen of death', 'Unresponsiveness', 'Hard drive replacements', 'upgrades, video cards, mother boards,SMPS, RAM , etc.', 'Backup Solutions ', 'Antivirus software', 'Virus, Trojan, Spyware, Adware, Malware removal', 'Installation or Upgrade of Windows VISTA, 7, 8, 8.1, 10 And linux', 'Printing issues', 'Computer cleaning and optimization.', 'No Internet connection', 'Speed up your computer significantly', 'Data recovery', 'Custom built home, office, or gaming desktops'];

  print = ['Laser printer cartridge refilling services', 'Inkjet Printer cartridge refilling kit services', 'Specialist in laser-jet & toners', 'New cartridges & Ink suppliers.', 'Refilling material & spare parts.', 'Genuine products for repairs or replacemen', 'Laser & Scanner Assembly', 'Registration Assembly', 'LVPS', 'DC Controller', 'Input Tray', 'Formatter', 'Duplexer Assembly', 'Fuser Assembly', 'Output Bin', 'Drum Cleaning', 'Pickup & Feed Roller', 'Sensor', 'ADF Jam', 'Printer roller maintenance', 'Common causes of jams',]

  network = ['Internet', 'VPN', 'Ethernet', 'Business Wifi', 'Wide Area Networks (WAN)', 'Local Area Networks (LAN)', 'Server and Networking Set Up and Installation', 'Network Security', 'Network Administration']
  web = ['STATIC WEBSITE', 'DYNAMIC WEBSITE', 'LAND PAGE WEBSITE', 'ECOMMERCE WEBSITE', 'CUSTOMIZED WEBSITE', 'Wordpress Development', 'Progressive Web App Development', 'Angular Development', 'PHP Web Development', 'Website Redesign Services', 'Third-Party API Integration']

  appList = ['Android App Development', 'iOS App Development', 'Hybrid App Development', 'Ionic App Development', 'Ecommerce App ', ]
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedId = +this._route.snapshot.params['id'];
    console.log(this.selectedId);
  }

}
