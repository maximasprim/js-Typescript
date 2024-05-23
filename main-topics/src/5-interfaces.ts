const myInterface = () =>{
interface Rectangle {
    width: number;
    height:number;
    color?: string;
}

const calculateArea = (rectangle: Rectangle): number =>{
    return rectangle.width*rectangle.height;
}
console.log(calculateArea({height:20,width: 10}))
}
export default myInterface;