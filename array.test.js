import analyze from './array';

test('Analizing an array element to find the average,minimum,maximum and length',() =>{
    expect(analyze([1,5,9])).toEqual({average:5,min:1,max:9,length:3});
    expect(analyze([10,15,20,-5,25])).toEqual({average:13,min:-5,max:25,length:5});
})