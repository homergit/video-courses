import { HoursMinutesPipe } from './hours-minutes.pipe';

describe('HoursMinutesPipe', () => {
  it('should return formatted duration', () => {
    const pipe = new HoursMinutesPipe();
    expect(pipe.transform(140)).toEqual('2h 20min');
  });

  it('should return formatted duration without hours', () => {
    const pipe = new HoursMinutesPipe();
    expect(pipe.transform(40)).toEqual('40min');
  });

  it('should return empty string', () => {
    const pipe = new HoursMinutesPipe();
    expect(pipe.transform(0)).toEqual('');
    expect(pipe.transform(null)).toEqual('');
  });
});
