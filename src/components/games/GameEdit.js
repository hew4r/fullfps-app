import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {setPropsAsInitial} from "../../hocs/setPropsAsInitial";
import GamesActions from "./GamesActions";


const MyField = ({input, meta, type, label, name}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...input} type={!type ? "text" : type }/>
    {
      meta.touched && meta.error && <span>{meta.error}</span>
    }
  </div>

)

/*
const isRequired = value => (
  !value && 'Este campo es requerido'
)*/

const isNumber = value => (
  isNaN(Number(value)) && "El campo debe ser numerico"
)


const validate = values => {
  const error = {};
  
  if (!values.name) {
    error.name = "El campo Name es requerido";
  }
  
  if (!values.sku) {
    error.sku = "El SKU es un campo requerido";
  }
  
  return error;
}

const GameEdit = ({ name, sku, price, handleSubmit, submitting, onBack }) => {
  return (
    <div>
      <h2>Game Edition</h2>
      <form onSubmit={handleSubmit} className="game-edit-field">
        
        <Field
          name="name"
          label="Nombre"
          component={MyField}
          type="text">
        </Field>
        
        <Field
          name="sku"
          label="SKU"
          component={MyField}
          type="text">
        </Field>
        
        <Field
          name="price"
          label="Price"
          component={MyField}
          type="number"
          validate={isNumber}>
        </Field>
        
        <GamesActions>
          <button type="submit" disabled={submitting  }>Aceptar</button>
          <button onClick={onBack}>Cancelar</button>
        </GamesActions>
        
      </form>
    </div>
  );
};

GameEdit.propTypes = {
  name: PropTypes.string,
  sku: PropTypes.string,
  price: PropTypes.number,
  onBack: PropTypes.func,
};

const GameEditForm = reduxForm({
  form: 'GameEdit',
  validate

})(GameEdit);

export default setPropsAsInitial(GameEditForm);