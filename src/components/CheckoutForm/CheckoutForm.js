
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
    <div>
      <form onSubmit={handleConfirm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value= {name} onChange={({target}) => setName(target.value)}/>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value= {phone} onChange={({target}) => setPhone(target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value= {email} onChange={({target}) => setEmail(target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckoutForm;