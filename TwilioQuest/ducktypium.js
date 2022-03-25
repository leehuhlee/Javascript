class Ducktypium{
    constructor(color){
        this.calibrationSequence = [];

        if(color === "red" || color === "blue" || color === "yellow")
            this.color = color;
        else 
            throw new Error();

        return this.color;
    }

    refract(color){
        if(this.color == color)
            return this.color;

        if(this.color === "red"){
            if(color === "blue")
                this.color = "purple";
            if(color === "yellow")
                this.color = "orange";
        }
            
        
        if(this.color === "blue"){
            if(color === "red")
                this.color = "purple";
            if(color === "yellow")
                this.color = "green";
        }
            
        
        if(this.color === "yellow"){
            if(color === "red")
                this.color = "orange";
            if(color === "blue")
                this.color = "green";
        }

        return this.color;
    }

    calibrate(calibrationItems){
        calibrationItems.sort();

        calibrationItems.forEach(item => {
            item *= 3;
            this.calibrationSequence.push(item);
        });
    }
}

const dt = new Ducktypium("red");

console.log(dt.color);

console.log(dt.refract("blue"));
console.log(dt.refract("red"));

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence);