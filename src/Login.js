import {useState} from "react";
import { Container } from "react-bootstrap";
import Modal from './Modal';



function Login(){

    const [inputs, setInputs] = useState({
        id:0,
        status: 'active',
        version: 0,
    });

    const [errors, setErrors] = useState({});

    const [openModal, setOpenModal] = useState({});

    const handleChange = (event) =>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        if(fieldName == 'age' && fieldValue > 99){
            setErrors(values=>({...values, age: "Value must be less than 100!",age_fieldClass:"error-field"}));
        }else{
            setErrors(values=>({...values, age: "",age_fieldClass:""}));
        }

        setInputs(values=>({...values, [fieldName]: fieldValue}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputs(values=>({...values, version: inputs.version+1}));

        if(inputs.first_name == undefined || inputs.first_name.trim() == ''){
            setErrors(values=>({...values, first_name: "This field is required!",first_name_fieldClass:"error-field"}));
        }else{
            setErrors(values=>({...values, first_name: "",first_name_fieldClass:""}));
        }
      
        console.log(inputs);
    }

    return (
        <Container>

        <button>Modal</button>

        

        <Modal>
        <form className="form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-4">
                    <label>First Name:</label>
                    <input type="text" name="first_name" className={"form-control text-input-field " + errors.first_name_fieldClass} 
                    value={inputs.first_name} onChange={handleChange}/>
                    <div className="error_message">{errors.first_name}</div>
                </div>
                <div className="col-sm-4">
                    <label>Last Name:</label>
                    <input type="text" name="last_name" className={"form-control text-input-field " + errors.last_name_fieldClass} 
                    value={inputs.last_name} onChange={handleChange}/>
                    <div className="error_message">{errors.last_name}</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <label>Age:</label>
                    <input type="number" name="age" className={"form-control number-input-field " + errors.age_fieldClass}
                    value={inputs.age} onChange={handleChange} min="0" max="99"/>
                    <div className="error_message">{errors.age}</div>
                </div>                
            </div>
            <input type="submit"/>
        </form>
        </Modal>
        </Container>
    )
}

export default Login;

// function Login () {
//     const [openModal, setOpenModal] = useState(false);


//     const Modal =({open}) => {
//         if (!open ) return null
        
        

    
//     return (
//     <Container>
//     <button>Login</button>
//     <div>
//         <div>Course
//         Course
//         CourseCourseCourse
//         </div>
//     </div>
//     </Container>
//     )
// }




//     return (
//         <Container>
//         <button>Login</button>
//         <div>
//             <div>Course
//             Course
//             CourseCourseCourse
//             </div>
//         </div>
//         </Container>
//     )
        
// }



// export default Login;