
class test {
    constructor(left, right) {
        this.left = left
        this.right = right;
        this.count = 0;
    }
    get_neighbors(){
        
        if(this.left == true){
            this.count +=1
        }
        if(this.right == true){
            this.count +=1
        }
        if(this.down == true){
            this.count +=1
        }
        alert(this.count); 
    }
    weight(){
        console.log("pass")
    }
    dist_weight(grd){
        if(this.left == true){
            grd[x][y-1].weight = this.weight/this.count
            
            //this.weight(this.count);
        }
        if(this.right == true){
            this.weight(this.count);
        }
        if(this.down == true){
            this.weight(this.count);
        }

    }
}

function position(pos,coords){
    let [x, y] = coords;
    return pos[0][1];
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
            console.log(grid[x][y-1] !=0,1)
            let left = (grid[x][y-1] !=0)
            let right = (grid[x][y+1] !=0) 
            let down = (grid[x+1][y] !=0)
            console.log(left,right,down)
            grid[x][y].left = left
            grid[x][y].right = right
            grid[x][y].down = down
        }
    }
}

for(let x = 0;x<8;x++){
    for(let y = 0;y<8;y++){
        if(grid[x][y] != 0 ){
           //grid[x][y].get_neighbors(); 
        }
    }
}
//Test weight applicatiion
let [x,y] = [3,3]
piece = grid[x][y]
piece.get_neighbors()
//alert(piece.count);
piece.dist_weight(grid)
