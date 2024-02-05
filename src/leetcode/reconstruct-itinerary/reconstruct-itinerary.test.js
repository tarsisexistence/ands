import { findItinerary } from './reconstruct-itinerary';

describe('[Leetcode] findItinerary', () => {
  test('example #1', () => {
    expect(
      findItinerary([
        ['MUC', 'LHR'],
        ['JFK', 'MUC'],
        ['SFO', 'SJC'],
        ['LHR', 'SFO']
      ])
    ).toEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC']);
  });

  test('example #2', () => {
    expect(
      findItinerary([
        ['JFK', 'SFO'],
        ['JFK', 'ATL'],
        ['SFO', 'ATL'],
        ['ATL', 'JFK'],
        ['ATL', 'SFO']
      ])
    ).toEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']);
  });

  test('example #3', () => {
    expect(
      findItinerary([
        ['JFK', 'KUL'],
        ['JFK', 'NRT'],
        ['NRT', 'JFK']
      ])
    ).toEqual(['JFK', 'NRT', 'JFK', 'KUL']);
  });

  test('example #4', () => {
    expect(
      findItinerary([
        ['EZE', 'AXA'],
        ['TIA', 'ANU'],
        ['ANU', 'JFK'],
        ['JFK', 'ANU'],
        ['ANU', 'EZE'],
        ['TIA', 'ANU'],
        ['AXA', 'TIA'],
        ['TIA', 'JFK'],
        ['ANU', 'TIA'],
        ['JFK', 'TIA']
      ])
    ).toEqual(['JFK', 'ANU', 'EZE', 'AXA', 'TIA', 'ANU', 'JFK', 'TIA', 'ANU', 'TIA', 'JFK']);
  });
});
