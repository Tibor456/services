import { Component, EventEmitter, Input, } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
   // this.loggingService.logStatusChange(status);
   this.accountsService.statusUpdated.emit(status);
  }
}
