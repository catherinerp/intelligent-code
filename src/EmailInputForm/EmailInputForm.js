import React, {useState} from 'react';

function EmailInputForm({}) {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailAddressInput, setEmailAddressInput] = useState('');

  return (
    <div className="container mt-4">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Address 2</label>
          <input
            type="text" class="form-control" id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default EmailInputForm;
