/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { Button } from 'components/common';
import { FieldArray } from 'formik';
import generateId from 'utils/generateId';
import media from 'styles/mediaQueries';
import Item from './Item';

const Wrapper = styled.div`
  padding-top: 6.6rem;

  @media (${media.md}) {
    padding-top: 3.4rem;
  }
`;

const Heading = styled.h2`
  margin-bottom: 2.4rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: -0.0375rem;
  color: ${({ theme }) => theme.text.paragraph};
`;

const itemValues = {
  id: generateId(),
  name: '',
  quantity: '',
  price: '',
  total: '',
};

const Items: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Item List</Heading>
      <FieldArray
        name="items"
        render={({ form, ...helpers }) => {
          const onAddClick = () => {
            helpers.push(itemValues);
          };

          const onRemoveClick = (index: number) => {
            helpers.remove(index);
          };
          return (
            <>
              {form.values.items.map((_, index) => (
                <Item key={index} index={index} onRemoveClick={onRemoveClick} />
              ))}
              <Button type="button" secondary wide onClick={onAddClick}>
                + Add New Item
              </Button>
            </>
          );
        }}
      />
    </Wrapper>
  );
};

export default Items;
