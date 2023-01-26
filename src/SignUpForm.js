import React, { useState, useEffect} from 'react';

function SignUpForm(){
    const [user, setUser] = useState([]);
    const [formFields, setFormFields] = useState([]);

    useEffect(() =>{
      getUser();
    },[]);

    const getUser = () => {
        fetch("http://localhost:9000/members")
        .then(response => response.json())
        .then(data => {
            setUser(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    }

    const onClickView = (event, item) => {
        fetch("http://localhost:9000/members/" + item.id)
            .then(response => response.json())
            .then(data => {
                setFormFields(data);
            })
            .catch((err) => {
                    console.log(err.message);
            });
    }

    const handleChange = (event) =>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormFields(values=>({...values, [fieldName]: fieldValue}));
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/members/" + 0, 
        {method: "POST", 
        body: JSON.stringify(formFields),
        })
        .then(response => response.json())
        .then(data => {
            setFormFields(data);
            getUser();
        })
        .catch((err) => {
                console.log(err.message);
        });

        
    }

    return (
        <div className='container'>
            <h1>Sign Up</h1>
                <form onSubmit={onHandleSubmit}>
                    <input type="hidden" value={formFields.id}/>
                    <div className='col my-2'> 
                      <input type="text" name="name" value={formFields.name} placeholder='name' onChange={handleChange}/>
                    </div>
                    <div className='col my-2'>
                      <input type="text" name="email address" value={formFields.title} placeholder='email address' onChange={handleChange}/>
                    </div>
                    <div className='col my-2'>
                      <input type="password" name="password" value={formFields.gender} placeholder='password' onChange={handleChange}/>
                    </div>
                    <div className='col my-2'>
                      <input type="submit"/>
                    </div>
                </form>
            {user.map((item)=>{
                return (
                    <div className="card my-2 p-2 signUp-fields">
                        <div>Name : {item.first_name}</div>
                        <div>Email Address : {item.email_address}</div>
                        <div>Password : {item.password}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default SignUpForm;