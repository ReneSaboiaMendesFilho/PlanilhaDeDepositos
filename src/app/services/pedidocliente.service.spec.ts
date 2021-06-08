/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PedidoclienteService } from './pedidocliente.service';

describe('Service: Pedidocliente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidoclienteService]
    });
  });

  it('should ...', inject([PedidoclienteService], (service: PedidoclienteService) => {
    expect(service).toBeTruthy();
  }));
});
