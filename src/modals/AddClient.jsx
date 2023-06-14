import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Modal from "../components/Modal";
import Input from "../components/Input";
import Select from '../components/Select';
import Button from "../components/Button";
import ErrorMessage from '../components/ErrorMessage';
import clientsApi from "../api/clients";
import ClientContext from '../contexts/index';

const validationSchema = Yup.object().shape({
  clientName: Yup.string().required().label("Client Name"),
  category: Yup.string().required().label("Category"),
  representative: Yup.string().required().label("Representative"),
  address: Yup.string().required().label("Address"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone"),
  bankAccount: Yup.string().required().label("Bank Account"),
});

const CATEGORIES = [
  { value: 'HOTEL', label: 'Hotel' },
  { value: 'RESTO', label: 'Restaurant' },
  { value: 'PUB', label: 'Pub' },
];

function AddClient({ isOpen, closeModal }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { clients, setClients } = useContext(ClientContext);

  const requestClose = () => {
    closeModal();
  }

  const handleAddClient = async ({ clientName, category, representative, address, email, phone, bankAccount }) => {
    setLoading(true);
    const result = await clientsApi.addClient(clientName, category, representative, address, email, phone, bankAccount);
    setLoading(false);

    if (!result.ok) return setError(result.data.error || result.data.status);

    setClients([...clients, result.data.client ]);
    requestClose();
  };

  return (
    <Modal closeModal={(e) => requestClose() } isOpen={isOpen}>
      <h3 style={{ textAlign: "center" }}>Client</h3>
      <Formik
        initialValues={{
          clientName: "",
          category: "",
          representative: "",
          address: "",
          email: "",
          phone: "",
          bankAccount: "",
        }}
        onSubmit={(values) => handleAddClient(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, errors }) => (
          <div className="inputs-container">
            <div className="row">
              { error && <ErrorMessage text={error}/>}
            </div>
            <div className="row">
              <label htmlFor="client">Client</label>
              <Input
                placeHolder={"Client name"}
                type={"text"}
                width={100}
                onChange={handleChange('clientName')}
                onBlur={() => setFieldTouched("clientName")}
              />
              { touched.clientName && <ErrorMessage text={errors.clientName}/> }
            </div>
            <div className="row">
              <label htmlFor="category">Category</label>
              <Select 
              data={CATEGORIES} 
              onChange={handleChange('category')}
              placeHolder={'Choose Category'}
              width={100}
              onBlur={() => setFieldTouched("category")}
              />
              { touched.category && <ErrorMessage text={errors.category}/> }
            </div>
            <div className="row">
              <label htmlFor="representative">Representative</label>
              <Input
                placeHolder={"Names"}
                type={"text"}
                width={100}
                onChange={handleChange('representative')}
                onBlur={() => setFieldTouched("representative")}
              />
              { touched.representative && <ErrorMessage text={errors.representative}/> }
            </div>
            <div className="row">
              <label htmlFor="address">Address</label>
              <Input
                placeHolder={"Province, District, Sector, Cell"}
                type={"text"}
                width={100}
                onChange={handleChange('address')}
                onBlur={() => setFieldTouched("address")}
              />
              { touched.address && <ErrorMessage text={errors.address}/> }
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
              <Input
                placeHolder={"Email address"}
                type={"email"}
                width={100}
                onChange={handleChange('email')}
                onBlur={() => setFieldTouched("email")}
              />
              { touched.email && <ErrorMessage text={errors.email}/> }
            </div>
            <div className="row">
              <label htmlFor="phone">Phone</label>
              <Input
                placeHolder={"Phone"}
                type={"tel"}
                width={100}
                onChange={handleChange('phone')}
                onBlur={() => setFieldTouched("phone")}
              />
              { touched.phone && <ErrorMessage text={errors.phone}/> }
            </div>
            <div className="row">
              <label htmlFor="bank">Bank Account {`(IBAN)`}</label>
              <Input
                placeHolder={"Bank Account"}
                type={"text"}
                width={100}
                onChange={handleChange('bankAccount')}
                onBlur={() => setFieldTouched("bankAccount")}
              />
              { touched.bankAccount && <ErrorMessage text={errors.bankAccount}/> }
            </div>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                text={ loading ? 'Loading...' : "Add Client" }
                width={50}
                onClick={handleSubmit}
                type={"submit"}
              />
            </div>
          </div>
        )}
      </Formik>
    </Modal>
  );
}

export default AddClient;
