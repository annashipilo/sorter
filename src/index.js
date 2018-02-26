class Sorter {
  constructor(arr = []) {
    this.arr = arr;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  bubblesort(arr){
      var sort_arr = arr;
      for(var i = 0; i < sort_arr.length - 1; i++) {
        for(var j = 0; j < sort_arr.length - 1; j++){
          if(sort_arr[j] > sort_arr[j+1]){
            var temp = sort_arr[j];
            sort_arr[j] = sort_arr[j+1];
            sort_arr[j+1] = temp;
          }
        }
      }
    
      return sort_arr;
  }

  sort(indices) {
    var sort_arr=[];

    for(var l = 0; l < indices.length; l++){
      sort_arr.push(this.arr[indices[l]]);
    }

    sort_arr = this.bubblesort(sort_arr);
    indices = this.bubblesort(indices);

    for(var k = 0; k < this.arr.length; k++){
      for(var m = 0; m < indices.length; m++){
          if(k == indices[m]){
              this.arr[k] = sort_arr[m];
      } 
    }  
      
    }
    return this.arr;
  }

  setComparator(compareFunction) {

  }
}

module.exports = Sorter;