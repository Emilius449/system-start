import { Injectable } from '@angular/core';
export type SvgIcon = {
  name: string;
  url: string;
};
@Injectable({
  providedIn: 'root',
})
export class SvgIconService {
  constructor() {}
  customIcons: SvgIcon[] = [
    {
      name: 'm_tech_arrow_drop_down',
      url: '../../assets/svg/arrow_drop_down.svg',
    },
    {
      name: 'm_tech_location',
      url: '../../assets/svg/location.svg',
    },
    {
      name: 'm_tech_arrow_drop_up',
      url: '../../assets/svg/arrow_drop_up.svg',
    },
    {
      name: 'm_tech_lock',
      url: '../../assets/svg/lock.svg',
    },
    {
      name: 'm_tech_arrow_down',
      url: '../../assets/svg/arrow_down.svg',
    },
    {
      name: 'm_tech_mail',
      url: '../../assets/svg/mail.svg',
    },
    {
      name: 'm_tech_arrow_up',
      url: '../../assets/svg/arrow_up.svg',
    },
    {
      name: 'm_tech_pages',
      url: '../../assets/svg/pages.svg',
    },
    {
      name: 'm_tech_calendar',
      url: '../../assets/svg/calendar.svg',
    },
    {
      name: 'm_tech_pie_chart',
      url: '../../assets/svg/pie_chart.svg',
    },
    {
      name: 'm_tech_chat',
      url: '../../assets/svg/chat.svg',
    },
    {
      name: 'm_tech_profile',
      url: '../../assets/svg/profile.svg',
    },
    {
      name: 'm_tech_close',
      url: '../../assets/svg/close.svg',
    },
    {
      name: 'm_tech_spam',
      url: '../../assets/svg/spam.svg',
    },
    {
      name: 'm_tech_dashboard',
      url: '../../assets/svg/dashboard.svg',
    },
    {
      name: 'm_tech_stack',
      url: '../../assets/svg/stack.svg',
    },
    {
      name: 'm_tech_error_warning',
      url: '../../assets/svg/error_warning.svg',
    },
    {
      name: 'm_tech_table',
      url: '../../assets/svg/table.svg',
    },
    {
      name: 'm_tech_file_text',
      url: '../../assets/svg/file_text.svg',
    },
    {
      name: 'm_tech_text_block',
      url: '../../assets/svg/text_block.svg',
    },
  ];
}
