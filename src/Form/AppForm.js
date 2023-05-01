import { Field, Form, Formik, ErrorMessage } from "formik"; //instalada la librería de React formik 
import "./AppForm.css";

//Función aplicación formulario con tres campos: nombre, email y mensaje
//Objeto InitialValues para los valores inciales de los campos
//Función Validate para validar que los datos son correctos (expresión regular)
//Función OnSubmit para registrar los valores en consola
//Componentes Field y ErrorMessage para renderizar los campos y mensajes de error 
//Atributo htmlFor para asociar cada etiqueta (label) a su campo correspondiente

function AppForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "Hola, me gustaría contactar con el equipo para..." }}
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "Este campo es obligatorio";
        } 
        if (!values.email) {
          errors.email = "Este campo es obligatorio";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "El correo no es válido";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <Field autoComplete="off" type="text" name="name" />
            <ErrorMessage name="name" component="p" />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <Field autoComplete="off" type="email" name="email" />
            <ErrorMessage name="email" component="p" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <Field component="textarea" name="message" value={values.message} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AppForm;
