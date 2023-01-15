import styles from './CommentsForm.module.scss'
import {Field, Form, Formik} from "formik";
import React from "react";
import {CommentsFormProps, FormikProps, SubmitProps} from "./CommentForm.types";


const programsCreatorFormValidate = () => {
    const errors = {};
    return errors;
}

const CommentsForm:React.FC<CommentsFormProps> = ({programId, addComment}) => {

    const submit = (values: SubmitProps, { setSubmitting, resetForm }: FormikProps ) => {
        setTimeout(() => {
            addComment(values.comment, programId);
            setSubmitting(false);
            resetForm();
        }, 400);
    }
    return (
        <div>
            <Formik
                initialValues={{comment: ''}}
                validate={programsCreatorFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (

                    <Form>
                        <div className={styles.writeComments}>
                            <div className={styles.writeComments_area}>
                                <Field as='textarea' name='comment' />
                            </div>
                            <div className={styles.writeComments_send}>
                                <button type="submit" disabled={isSubmitting}>
                                    <span>Add comment</span>
                                </button>
                            </div>
                        </div>
                    </Form>

                )}
            </Formik>
        </div>
    )
}

export default CommentsForm;