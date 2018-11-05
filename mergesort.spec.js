describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,2], [3,4])).toEqual([1,2,3,4]);
    expect(merge([1,4,5], [2,3])).toEqual([1,2,3,4,5]);
    expect(merge([2,3], [1,4,5])).toEqual([1,2,3,4,5]);
  });
});

describe('Mergesort function', function(){
  it('should sort correctly', function(){
    // test the merging algorithm
    expect(mergeSort([8,7,6,5])).toEqual([5,6,7,8]);

  });
  it('sort correct uneven lengthed arrays', function(){
    // test the merging algorithm
    expect(mergeSort([8,10,4,2,7])).toEqual([2,4,7,8,10]);

  });

  it('sorted correctly', function(){
    // test the merging algorithm
    expect(mergeSort([1,2,3,4])).toEqual([1,2,3,4]);

  });
  it('one item in array', function(){
    // test the merging algorithm
    expect(mergeSort([1])).toEqual([1]);

  });
  it('2 items in array', function(){
    // test the merging algorithm
    expect(mergeSort([2,1])).toEqual([1,2]);

  });

});

