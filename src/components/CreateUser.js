import React , {useState} from 'react';

const CreateUser = () => {
    let [name,setName]  = useState("");
    let [email,setEmail]  = useState("");
    let [phone,setPhone]  = useState("");
    let [address,setAddress]  = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
          id: new Date(),
          name,
          email,
          phone,
          address
        };
        dispatch(addPost(data));
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
      };
    return(
        <div>
           <form  onSubmit={handleSubmit}>
             <input required value={name} type="text" name="name" placeholder="Enter name" onChange={ (e) => setName(e.target.value)} />
              <br></br>
             <input required value={email} type="text" name="email" placeholder="Enter email" onChange={ (e) => setName(e.target.value)} />
             <br> </br>
             <input required value={phone} type="text" name="phone" placeholder="Enter phone" onChange={ (e) => setName(e.target.value)} />
              <br></br>
             <input required value={address} type="text" name="address" placeholder="Enter address" onChange={ (e) => setName(e.target.value)} />
             
            </form>
        </div>
    )
}

export default CreateUser;