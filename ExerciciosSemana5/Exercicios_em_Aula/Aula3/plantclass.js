class Plants {
    constructor(name, hydration){
      this.name = name;
      this.hydration = hydration;
      this.alive = true;
    }
    
    water(volume){
      if(this.alive){
        if(this.hydration + volume > 100){
          this.alive = false;
        } else if(this.hydration > 0 || this.hydration < 100){
          this.hydration += volume;
        }
      }
    }
    
    percentage(){
      console.log(this.hydration + "%")
    }
  }
  
  const ganja = new Plants("ganja", 80)
  
  ganja.water(20)
  
  console.log(ganja)
  
  ganja.percentage()