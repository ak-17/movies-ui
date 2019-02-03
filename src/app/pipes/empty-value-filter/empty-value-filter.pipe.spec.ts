import { EmptyValueFilterPipe } from './empty-value-filter.pipe';

describe('EmptyValueFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new EmptyValueFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
