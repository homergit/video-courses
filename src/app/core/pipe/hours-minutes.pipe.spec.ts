import { HoursMinutesPipe } from './hours-minutes.pipe';

describe('HoursMinutesPipe', () => {
  it('should return formatted duration', () => {
    const pipe = new HoursMinutesPipe();
    expect(pipe.transform(140)).toEqual('2h 20min');
  });
});
