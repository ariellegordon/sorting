describe('Bubble Sort', function(){
  beforeEach(function(){
    spyOn(window,"swap").and.callThrough();
  });
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an array with a single item', function(){
    expect(bubbleSort([4])).toEqual([4]);
    expect(swap.calls.count()).toEqual(0);
  });
  it('sorts an array with 4 numbers', function(){
    expect(bubbleSort([4,3,1,2])).toEqual([1,2,3,4]);
  });
});

