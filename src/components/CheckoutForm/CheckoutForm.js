
import { useState } from "react";

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

  return (
    <div className="text-center">
      <form onSubmit={handleConfirm}>
        <div className="mb-2 p-2 container">
          <label className="form-label text-center" htmlFor="name">Name:</label>
          <input className="form-control border-dark rounded-4" type="text" id="name" name="name" value= {name} onChange={({target}) => setName(target.value)}/>
        </div>
        <div className="mb-2 p-2 container">
          <label className="form-label" htmlFor="phone">Phone:</label>
          <input className="form-control border-dark rounded-4" type="tel" id="phone" name="phone" value= {phone} onChange={({target}) => setPhone(target.value)} />
        </div>
        <div className="mb-2 p-2 container">
          <label className="form-label" htmlFor="email">Email:</label>
          <input className="form-control border-dark rounded-4" type="email" id="email" name="email" value= {email} onChange={({target}) => setEmail(target.value)} />
        </div>
        <button className="d-grid mx-auto container btn btn-outline-danger m-4" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckoutForm;