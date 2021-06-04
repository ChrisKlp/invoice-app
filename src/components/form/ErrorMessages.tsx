import { useFormikContext } from 'formik';
import { TInitialValues } from 'store/formSchema';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  margin-top: 3.2rem;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.021rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ErrorMessages: React.FC = () => {
  const { errors, submitCount } = useFormikContext<TInitialValues>();

  if (!!submitCount && !!Object.keys(errors).length) {
    return (
      <ErrorWrapper>
        <Text>- All fields must be added</Text>
        {typeof errors.items === 'string' && <Text>{errors.items}</Text>}
      </ErrorWrapper>
    );
  }

  return null;
};

export default ErrorMessages;
