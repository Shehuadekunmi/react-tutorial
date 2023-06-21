import Second from "./Second"
import "./first.css"
const First = () => {
    // logic is writting b4 return
    const myname ='ola'
return (
    // template is writting after return
    <div className="first">
        <h1>THIS OUR FIRST COMPONENT</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, aperiam.</p>
        <Second/>
        <h1> {myname} </h1>

    </div>
);
};

export default First