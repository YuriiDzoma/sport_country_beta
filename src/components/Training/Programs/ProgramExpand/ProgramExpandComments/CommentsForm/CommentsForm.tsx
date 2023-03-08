import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useParams } from 'react-router-dom';

import { FormikProps, SubmitProps } from './CommentForm.types';
import styles from './CommentsForm.module.scss';

const programsCreatorFormValidate = () => {
  return {};
};

const CommentsForm = () => {
  const { id } = useParams();
  const submit = (values: SubmitProps, { setSubmitting, resetForm }: FormikProps) => {
    setTimeout(() => {
      // addComment(values.comment, id);
      setSubmitting(false);
      resetForm();
    }, 400);
  };
  return (
    <div>
      <Formik initialValues={{ comment: '' }} validate={programsCreatorFormValidate} onSubmit={submit}>
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.writeComments}>
              <div className={styles.writeComments_area}>
                <Field as="textarea" name="comment" placeholder="Add your comment ..." />
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
  );
};

export default CommentsForm;
