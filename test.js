class test {
  constructor(left, right) {
    this.left = left
    this.right = right;
  }
}
let grid = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,new test(0,0),new test(0,0),new test(0,0),0,0,0],
  [0,0,0,new test(0,0),0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
]
for(let x = 0;x<8;x++){
    for(let y = 0;y<8;y++){
        if(grid[x][y] != 0 ){
            //console.log(grid[x][y-1])            
            grid[x][y].left = (grid[x][y-1] !=0)
            grid[x][y].right = (grid[x][y+1] !=0)
            //console.log 
            grid[x][y].down = (grid[x+1][y] !=0)
        }
    }
}
for(let x = 0;x<8;x++){
    for(let y = 0;y<8;y++){
        if(grid[x][y] != 0 ){
            console.log(x,y)
            console.log(grid[x][y].left)
            console.log(grid[x][y].right)
            console.log(grid[x][y].down)
        
        }
    }
}
//console.log(grid[3][4].right);
