import { Component, Input, Signal, signal } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import {
  Injector,
  EnvironmentInjector,
  ViewContainerRef,
  ComponentRef,
  createComponent,
  DestroyRef,
  inject,
} from '@angular/core';
import { InputSwitch } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-fullcalendar',
  standalone: true,
  imports: [FullCalendarModule, FormsModule],
  templateUrl: './fullcalendar.component.html',
  styleUrl: './fullcalendar.component.scss'
})
export class FullcalendarComponent {
  toggledDays: Record<string, boolean> = {};
  switchRefs: ComponentRef<InputSwitch>[] = [];

  private injector = inject(Injector);
  private envInjector = inject(EnvironmentInjector);
  private destroyRef = inject(DestroyRef);
  private viewContainerRef = inject(ViewContainerRef);

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    dayCellDidMount: (arg) => {
      const dateStr = arg.date.toISOString().split('T')[0];
      const frame = arg.el.querySelector('.fc-daygrid-day-frame');
      if (!frame) return;

      const compRef = createComponent(DynamicInputSwitchHostComponent, {
        environmentInjector: this.envInjector,
        elementInjector: this.injector,
      });

      compRef.setInput('dateStr', dateStr);
      frame.appendChild(compRef.location.nativeElement);
    },
    datesSet: () => {
      this.switchRefs.forEach((ref) => ref.destroy());
      this.switchRefs = [];
    },
  };
}



@Component({
  selector: 'app-dynamic-input-switch-host',
  standalone: true,
  imports: [ToggleSwitchModule, FormsModule],
  template: `
    <p-toggleswitch [(ngModel)]="checked" (onChange)="onToggle()" styleClass="custom-switch"/>
    <div style="font-size: 12px;">상세설정</div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})
export class DynamicInputSwitchHostComponent {
  @Input() dateStr: string = '';
  checked = false;

  onToggle() {
    console.log(`${this.dateStr} = ${this.checked}`);
  }
}
