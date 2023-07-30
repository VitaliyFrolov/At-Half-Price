import { useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { List } from 'shared/ui/List';
import { SearchInput } from './SearchInput';

interface ISearchModalProps {
  visible?: boolean;
}

export const SearchModal = (props: ISearchModalProps) => {
  const {
    visible = true
  } = props;
  const [result, setResult] = useState();

  return visible ? (
    <Modal>
      <SearchInput focus={true} />
      {result && (
       <List
          data={result}
          itemContentRender={(resultItem) => (
            <>
              
            </>
          )}
       />
      )}
    </Modal>
  ) : null;
};
