import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import SwiperCore, {  Pagination, EffectCoverflow } from 'swiper';
SwiperCore.use([EffectCoverflow, Pagination]);


@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CertificadosComponent {

}
