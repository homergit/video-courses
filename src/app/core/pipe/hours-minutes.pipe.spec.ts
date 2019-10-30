import { HoursMinutesPipe } from './hours-minutes.pipe';

describe('HoursMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new HoursMinutesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return formatted duration', () => {
    const pipe = new HoursMinutesPipe();
    expect(pipe.transform(140)).toEqual('2h 20min');
  });
});
