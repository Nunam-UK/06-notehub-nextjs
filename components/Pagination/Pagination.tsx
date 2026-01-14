import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selected: number) => void;
  forcePage: number;
}

const Pagination = ({ pageCount, onPageChange, forcePage }: PaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      // Передаємо функцію оновлення сторінки
      onPageChange={(data) => onPageChange(data.selected + 1)}
      containerClassName={css.pagination}
      pageClassName={css.pageItem} 
      activeClassName={css.active}
      forcePage={forcePage - 1}
    />
  );
};

export default Pagination;