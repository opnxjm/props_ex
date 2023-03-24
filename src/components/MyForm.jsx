import React from "react";
import { useState } from "react";
function MyForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert(`
            Email: ${inputs.email}
            Name: ${inputs.n}
            Lastname: ${inputs.lastName}
            Phone Number: ${inputs.phoneNum}
            Password: ${inputs.pass}
  `);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Email address:
                <input
                    name="email"
                    pattern="([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+).(.+)"
                    placeholder="Enter email"
                    type="email"
                    value={inputs.email}
                    onChange={handleChange}
                    required
                />
            </label><br/>
            <label>Name:
                <input
                    name="n"
                    pattern="^[A-Za-z]+$"
                    placeholder="Enter Name"
                    type="text"
                    value={inputs.n}
                    onChange={handleChange}
                    required
                />
            </label><br/>
            <label>Lastname:
                <input
                    name="lastName"
                    pattern="^[A-Za-z]+$"
                    placeholder="Enter Lastname"
                    type="text"
                    value={inputs.lastName}
                    onChange={handleChange}
                    required
                />
            </label><br/>
            <label>Phone Number:
                <input
                    name="phoneNum"
                    pattern="^[0-9]{10}$"
                    placeholder="Enter Phone Number"
                    type="tel"
                    value={inputs.phoneNum}
                    onChange={handleChange}
                    required
                />
            </label><br/>
            <label>Password:
                <input
                    name="pass"
                    placeholder="Enter Password"
                    type="password"
                    value={inputs.pass}
                    onChange={handleChange}
                    required
                />
            </label><br/>
            <input type="submit"/>
        </form>
    );
}
export default MyForm;