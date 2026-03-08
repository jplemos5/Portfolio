import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoverService {
  hoverDisabled = false;  // controla se o hover está desativado
}