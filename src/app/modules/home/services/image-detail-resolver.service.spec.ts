import { TestBed } from '@angular/core/testing';

import { ImageDetailResolverService } from './image-detail-resolver.service';

describe('ImageDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageDetailResolverService = TestBed.get(ImageDetailResolverService);
    expect(service).toBeTruthy();
  });
});
