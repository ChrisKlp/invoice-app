/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { Button } from 'components/common';
import { FieldArray } from 'formik';
import generateId from 'utils/generateId';
import Item from './Item';

const Wrapper = styled.div`
  padding: 2.6rem 0;
`;

const Heading = styled.h2`
  margin-bottom: 2.4rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: -0.0375rem;
  color: ${({ theme }) => theme.text.subheading};
`;

const itemValues = {
  id: generateId(),
  name: '',
  quantity: '',
  price: '',
  total: '',
};

type ItemsProps = {};

const Items: React.FC<ItemsProps> = () => {
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
