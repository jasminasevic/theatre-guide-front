import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type?: string;
  children?: Menu[];
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'Home',
    type: 'link',
  },
  {
    state: 'repertoires',
    substate: 'all-plays',
    name: 'Repertoire',
    type: 'sublink',
  },
  {
    state: 'theatres',
    substate: 'all-theatres',
    name: 'Theatres',
    type: 'sublink',
  },
  {
    state: 'shows',
    name: 'Shows',
    type: 'sub',
    children: [
      {state: 'shows', substate: 'all-shows', name: 'Shows', type: 'link'},
      {state: 'actors', substate: 'all-actors', name: 'Actors', type: 'link'},
      {state: 'directors', substate: 'all-directors', name: 'Directors', type: 'link'},
    ]
  },
  {
    state: 'about',
    name: 'About',
    type: 'sub',
    children: [
      {state: 'about', name: 'About Us', type: 'sublink'},
      {state: 'contact', name: 'Get in Touch', type: 'sublink'},
      {state: 'business-partnerships', name: 'Partner with Us', type: 'sublink'}
    ]
  },
];


@Injectable()
export class MenuItems {
  getAll() {
    return MENUITEMS;
  }
}
