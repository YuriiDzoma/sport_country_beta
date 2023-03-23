export type SubmitProps = {
  comment: string;
};

export type FormikProps = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};
